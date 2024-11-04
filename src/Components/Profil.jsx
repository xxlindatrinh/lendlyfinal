import '../css/Profil.css';
import { Link, useNavigate } from 'react-router-dom';

function Profil() {
    const navigate = useNavigate();
    return (
        <div className="profil-container">
            <header className="profil-header">
                <div id='back-button'>
                    <button className="back-button" onClick={() => navigate(-1)}>&lt; Tilbage</button>
                </div>
                <div>
                    <h1>Profil</h1>
                </div>
            </header>
            
            {/* Link to profile details page */}
            <Link to="/Omprofil" className="profile-info">
                <div className="profile-picture">
                    <img src="ikoner/profil.svg" alt="Profile" />
                </div>
                <div className="profile-name">
                    <p>Mit navn</p>
                    <span>Vis min profil</span>
                </div>
            </Link>

            {/* Main profile options */}
            <div className="profile-options">
                <button className="option-button">Mine lejeaftaler</button>
                <button className="option-button">Mine udlejninger</button>
                <button className="option-button">Brugertilpasning</button>
                <button className="option-button">Mine grupper</button>
            </div>

            {/* Additional profile actions */}
            <div className="profile-extras">
                <button className="option-button">Inviter venner</button>
                <button className="option-button">Hjælpecenter</button>
                <button className="option-button">Om Lendly</button>
            </div>

            {/* Holiday mode section */}
            <div className="profile-holiday">
                <button className="option-button">Ferie­tilstand</button>
            </div>
        </div>
    );
}

export default Profil;
