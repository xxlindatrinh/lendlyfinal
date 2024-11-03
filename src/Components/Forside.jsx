import React from "react";
import "../css/Forside.css";

function Forside() {
  return (
    <main className="main-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Hvorhen?" />
      </div>

      {/* Scrollable Categories */}
      <div className="categories-block">
        <div className="scroll-category active">Ikoner</div>
        <div className="scroll-category">Hytter</div>
        <div className="scroll-category">Wow!</div>
        <div className="scroll-category">Trætopshuse</div>
        <div className="scroll-category">Professionelle værter</div>
        <div className="scroll-category">Unikke hjem</div>
        <div className="scroll-category">Historiske hjem</div>
      </div>

      {/* Forside Content */}
      <div className="forside-container">
        <h1>I nærheden af dig</h1>
        <div className="grid-container">
          <div className="grid-item">
            <img src="img/sækkevogn.webp" alt="Sækkevogn" className="image-placeholder" />
            <p>Sækkevogn</p>
            <p>30 kr</p>
          </div>
          <div className="grid-item">
            <img src="/img/badminton.jpg" alt="Stige" className="image-placeholder" />
            <p>Stige</p>
            <p>20 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/strikkepinde.webp" alt="Strikkepinde sæt" className="image-placeholder" />
            <p>Strikkepinde sæt</p>
            <p>40 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/trillebør.webp" alt="Trillebør" className="image-placeholder" />
            <p>Trillebør</p>
            <p>30 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/sav.jpg" alt="Geringsav" className="image-placeholder" />
            <p>Geringsav</p>
            <p>20 kr</p>
          </div>
          <div className="grid-item">
            <div className="image-container">
              <img src="/img/lysterapi.webp" alt="Lysterapi lampe" className="image-placeholder" />
              <div className="badge">1-2 mdr.</div>
            </div>
            <p>Lysterapi lampe</p>
            <p>50 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/elektrisk-høvl.webp" alt="Elektrisk høvl" className="image-placeholder" />
            <p>Elektrisk høvl</p>
            <p>50 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/stole.jpg" alt="4 stole" className="image-placeholder" />
            <p>4 stole</p>
            <p>30 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/strikkepinde.webp" alt="Strikkepinde sæt" className="image-placeholder" />
            <p>Strikkepinde sæt</p>
            <p>40 kr</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Forside;
