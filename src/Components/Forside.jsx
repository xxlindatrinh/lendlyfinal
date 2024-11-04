import React, { useState } from "react";
import "../css/Forside.css";

const items = [
  { src: "img/projektor.webp", alt: "Projektor", name: "Projektor", price: "30 kr" },
  { src: "img/sækkevogn.webp", alt: "Sækkevogn", name: "Sækkevogn", price: "30 kr" },
  { src: "/img/badminton.jpg", alt: "Badminton ketcher", name: "Badminton ketcher", price: "20 kr" },
  { src: "img/soundboks.webp", alt: "Soundboks", name: "Soundboks", price: "300 kr" },
  { src: "img/trillebør.webp", alt: "Trillebør", name: "Trillebør", price: "30 kr" },
  { src: "img/sav.webp", alt: "Geringsav", name: "Geringsav", price: "20 kr" },
  { src: "/img/lysterapi.webp", alt: "Lysterapi lampe", name: "Lysterapi lampe", price: "50 kr", badge: "1-2 mdr." },
  { src: "img/elektrisk-høvl.webp", alt: "Elektrisk høvl", name: "Elektrisk høvl", price: "50 kr" },
  { src: "img/stole.webp", alt: "4 stole", name: "4 stole", price: "30 kr" },
  { src: "img/strikkepinde.webp", alt: "Strikkepinde sæt", name: "Strikkepinde sæt", price: "40 kr" },
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


function Forside() {
  const [likedItems, setLikedItems] = useState({});

  const handleHeartClick = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="main-container">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Hvad søger du?" />
        </div>
        <div className="lokation">
          <img src="/ikoner/location.svg" alt="lokation" />
        </div>
      </div>

      {/* Categories */}
      <div className="categories-block">
        <div className="scroll-category active">Hus og Have</div>
        <div className="scroll-category">Værktøj</div>
        <div className="scroll-category">Elektronik</div>
        <div className="scroll-category">Tøj</div>
        <div className="scroll-category">Hobby</div>
      </div>

      {/* Main Content */}
      <div className="forside-container">
        <h1>I nærheden af dig</h1>
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
    </main>
  );
}

export default Forside;

