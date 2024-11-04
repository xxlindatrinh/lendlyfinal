import React from "react";
import "../css/Forside.css";

function Forside() {
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
            <img src="img/projektor.webp" alt="Projektor" className="image-placeholder" />
            <p>Projektor</p>
            <p>30 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/sækkevogn.webp" alt="Sækkevogn" className="image-placeholder" />
            <p>Sækkevogn</p>
            <p>30 kr</p>
          </div>
          <div className="grid-item">
            <img src="/img/badminton.jpg" alt="Badminton ketcher" className="image-placeholder" />
            <p>Badminton ketcher</p>
            <p>20 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/soundboks.webp" alt="Soundboks" className="image-placeholder" />
            <p>Soundboks</p>
            <p>300 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/trillebør.webp" alt="Trillebør" className="image-placeholder" />
            <p>Trillebør</p>
            <p>30 kr</p>
          </div>
          <div className="grid-item">
            <img src="img/sav.webp" alt="Geringsav" className="image-placeholder" />
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
            <img src="img/stole.webp" alt="4 stole" className="image-placeholder" />
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
