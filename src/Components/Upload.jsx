import React, { useState } from 'react';
import { ref, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import '../css/Upload.css'; // Custom CSS file
import { database, storage } from "./Firebase"; // Corrected path to Firebase

const tilfoejbilleder = "/ikoner/tilfoejbilleder.svg"; // Corrected path to use the image from the public folder

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
    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    // Upload each image to Firebase Storage
    const uploadedURLs = await Promise.all(
      images.map(async (image) => {
        const imageRef = storageRef(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        return await getDownloadURL(imageRef);
      })
    );

    // Create a new reference in Firebase Realtime Database with an auto-generated ID
    const newPostRef = push(ref(database, 'posts/'));

    // Set the new post data in the Realtime Database
    set(newPostRef, {
      title,
      price,
      deposit,
      category,
      condition,
      description,
      location,
      imageUrls: uploadedURLs, // Store array of image URLs
      timestamp: Date.now()
    })
    .then(() => {
      alert("Data saved successfully.");
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
    })
    .catch((error) => {
      console.error("Error writing to the database", error);
    });
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <button 
        type="button" 
        disabled={uploadLimitReached} 
        onClick={() => document.getElementById('imageUpload').click()} 
        className="upload-image-button upload-image-button-gray"
      >
        <div className="upload-button-content">
          <div className="upload-button-icon-container">
            <img src={tilfoejbilleder} alt="Tilføj ikon" className="upload-button-icon" />
          </div>
          <span className="upload-button-text">Tilføj billeder</span>
        </div>
        {images.length > 0 && <span className="image-count">Billeder: {images.length}/10</span>}
      </button>
      
      <input 
        type="file" 
        id="imageUpload" 
        multiple 
        accept="image/*" 
        onChange={handleImageChange} 
        style={{ display: 'none' }} 
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
      <small className="upload-guidance">Vejledning til fastsættelse af depositum</small>
      
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
        <button type="button" className="edit-location-button">Rediger</button>
      </div>

      <button 
        type="submit" 
        className="submit-button"
      >
        Fortsæt
      </button>
    </form>
  );
}

export default Upload;
