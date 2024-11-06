// Camilla & Linda
import "../css/Profil.css";
import { Link, useNavigate } from "react-router-dom";

function Profil() {
  const navigate = useNavigate();
  return (
    <div className="profil-container">
      <header className="profil-header">
        <div id="back-button">
          <button className="back-button" onClick={() => navigate(-1)}>
            &lt; Tilbage
          </button>
        </div>
        <div>
          <h1>Profil</h1>
        </div>
      </header>

      {/* Linker til Om profil */}
      <Link to="/Omprofil" className="profile-info">
        <div className="profile-picture">
          <img src="img/profilbillede.svg" alt="Profile" />
        </div>
        <div className="profile-name">
          <p>Ursula Carlsen</p>
          <span>Vis min profil</span>
        </div>
      </Link>

      {/* Main profil muligheder */}
      <div className="profile-options">
        <button className="option-button">
          <img
            src="/ikoner/mine_lejeaftaler_ikon.svg"
            alt="Lejeaftaler"
            className="option-icon"
          />
          Mine lejeaftaler
        </button>
        <button className="option-button">
          <img
            src="/ikoner/mine_udlejninger_ikon.svg"
            alt="Udlejninger"
            className="option-icon"
          />
          Mine udlejninger
        </button>
        <button className="option-button">
          <img
            src="/ikoner/brugertilpasning_ikon.svg"
            alt="Brugertilpasning"
            className="option-icon"
          />
          Brugertilpasning
        </button>
        <button className="option-button">
          <img
            src="/ikoner/gruppe_ikon.svg"
            alt="Mine grupper"
            className="option-icon"
          />
          Mine grupper
        </button>
      </div>

      {/* Andre profil muligheder */}
      <div className="profile-extras">
        <button className="option-button">
          <img
            src="/ikoner/inviter_venner_ikon.svg"
            alt="Inviter venner"
            className="option-icon"
          />
          Inviter venner
        </button>
        <button className="option-button">
          <img
            src="/ikoner/hjælpecenter_ikon.svg"
            alt="Hjælpecenter"
            className="option-icon"
          />
          Hjælpecenter
        </button>
        <button className="option-button">
          <img
            src="/ikoner/om_lendy_ikon.svg"
            alt="Om Lendly"
            className="option-icon"
          />
          Om Lendly
        </button>
      </div>

      {/* Ferie tilstand sektion */}
      <div className="profile-holiday">
        <button className="option-button">
          <img
            src="/ikoner/ferie_ikon.svg"
            alt="Ferie­tilstand"
            className="option-icon"
          />
          Ferie­tilstand
        </button>
      </div>
    </div>
  );
}

export default Profil;
