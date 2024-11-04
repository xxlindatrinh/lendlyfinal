import React, { useState } from "react";
import "../css/Favoritter.css";

const items = [
  { src: "img/sækkevogn.webp", alt: "Sækkevogn", name: "Sækkevogn", price: "30 kr" },
  { src: "/img/badminton.jpg", alt: "Badminton ketcher", name: "Badminton ketcher", price: "20 kr" },
  { src: "img/soundboks.webp", alt: "Soundboks", name: "Soundboks", price: "300 kr" },
  { src: "/img/lysterapi.webp", alt: "Lysterapi lampe", name: "Lysterapi lampe", price: "50 kr", badge: "1-2 mdr." },
];

const HeartButton = ({ onClick, isLiked }) => (
  <div className="heart-btn" onClick={onClick}>
    <svg
      className={`heart-icon ${isLiked ? "liked" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M12 21.758l-1.35-1.233C5.4 15.254 2 12.203 2 8.292 2 5.5 4.243 3.25 7.02 3.25c1.876 0 3.662 1.043 4.48 2.59a5.438 5.438 0 0 1 4.48-2.59C19.757 3.25 22 5.5 22 8.292c0 3.91-3.4 6.962-8.65 12.233L12 21.758z" />
    </svg>
  </div>
);

function Favoritter() {
  const [likedItems, setLikedItems] = useState({});

  const handleHeartClick = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="favoritter-container">
      <h1>Mine favoritter</h1>
      <div className="grid-container">
        {items.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="image-container">
              <img src={item.src} alt={item.alt} className="image-placeholder" />
              <HeartButton
                onClick={() => handleHeartClick(index)}
                isLiked={likedItems[index]}
              />
              {item.badge && <div className="badge">{item.badge}</div>}
            </div>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritter;
