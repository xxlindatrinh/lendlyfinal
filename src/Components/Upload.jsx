// Astrid
import React, { useState } from "react";
import { ref, push, set } from "Firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "Firebase/storage";
import "../css/Upload.css";
import { database, storage } from "./Firebase";

const tilfoejbilleder = "/ikoner/tilfoejbilleder.svg";

function Upload() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Aarhus, Denmark");
  const [images, setImages] = useState([]);
  const [uploadLimitReached, setUploadLimitReached] = useState(false);

  // Function to handle image selection
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    if (images.length + selectedImages.length > 10) {
      setUploadLimitReached(true);
      return;
    }
    setImages([...images, ...selectedImages]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    try {
      console.log("Starting the form submission...");

      // Upload each image to Firebase Storage
      const uploadedURLs = await Promise.all(
        images.map(async (image) => {
          try {
            console.log(`Uploading image: ${image.name}`);
            const imageRef = storageRef(
              storage,
              `images/${Date.now()}_${image.name}`
            );
            await uploadBytes(imageRef, image);
            const downloadURL = await getDownloadURL(imageRef);
            console.log(
              `Image uploaded successfully: ${image.name}, URL: ${downloadURL}`
            );
            return downloadURL;
          } catch (imageError) {
            console.error(`Error uploading image ${image.name}:`, imageError);
            throw imageError;
          }
        })
      );

      console.log("All images uploaded successfully:", uploadedURLs);

      // Create a new reference in Firebase Realtime Database with an auto-generated ID
      const newListingRef = push(ref(database, "listings/"));
      console.log("New listing reference created:", newListingRef.key);

      // Set the new listing data in the Realtime Database
      await set(newListingRef, {
        title,
        price,
        deposit,
        category,
        condition,
        description,
        location,
        imageUrls: uploadedURLs,
        timestamp: Date.now(),
      });

      console.log("Data saved successfully in Firebase Realtime Database.");

      // Clear the form inputs after successful submission
      setTitle("");
      setPrice("");
      setDeposit("");
      setCategory("");
      setCondition("");
      setDescription("");
      setLocation("Aarhus, Denmark");
      setImages([]);
      setUploadLimitReached(false);

      alert("Data saved successfully.");
    } catch (error) {
      console.error("Error during form submission:", error);
      alert(
        "An error occurred while saving the data. Check the console for more details."
      );
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <button
        type="button"
        disabled={uploadLimitReached}
        onClick={() => document.getElementById("imageUpload").click()}
        className="upload-image-button upload-image-button-gray"
      >
        <div className="upload-button-content">
          <div className="upload-button-icon-container">
            <img
              src={tilfoejbilleder}
              alt="Tilføj ikon"
              className="upload-button-icon"
            />
          </div>
          <span className="upload-button-text">Tilføj billeder</span>
        </div>
        {images.length > 0 && (
          <span className="image-count">Billeder: {images.length}/10</span>
        )}
      </button>

      <input
        type="file"
        id="imageUpload"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="upload-input"
      />
      <input
        type="number"
        placeholder="Pris"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="upload-input"
      />
      <input
        type="number"
        placeholder="Pris på depositum"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        className="upload-input"
      />
      <small className="upload-guidance">
        Vejledning til fastsættelse af depositum
      </small>

      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="upload-input"
      />
      <input
        type="text"
        placeholder="Stand"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        required
        className="upload-input"
      />
      <textarea
        placeholder="Beskrivelse"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="upload-textarea"
      ></textarea>

      <div className="upload-location">
        <strong>Lokation:</strong> {location}
        <button type="button" className="edit-location-button">
          Rediger
        </button>
      </div>

      <button type="submit" className="submit-button">
        Fortsæt
      </button>
    </form>
  );
}

export default Upload;
