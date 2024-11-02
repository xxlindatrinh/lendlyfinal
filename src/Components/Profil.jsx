import '../css/Profil.css';
import { Link } from 'react-router-dom';


function Profil() {
    return (
        <>
        <div className="profil-container">
        <header className="profil-header">
                <div id='back-button'>
                <button className="back-button">&lt; Tilbage</button>
                </div>
                <div>
                <h1>Profil</h1>
                </div>
                <div>
                </div>
            </header>
            
            <Link to="/Omprofil" className="profile-info">
            <div className="profile-picture">
                <img src="ikoner/profil.svg" alt="Profile" />
            </div>
            <div className="profile-name">
                <p>Mit navn</p>
                <span>Vis min profil</span>
            </div>
            </Link>

            <div className="profile-options">
                <button className="option-button">Din guide til Lendly</button>
                <Link to="/Favoritter" className="option-button">
                    Mine favoritter
                </Link>

                <button className="option-button">Mine lejeaftaler</button>
                <button className="option-button">Mine udlejninger</button>
                <button className="option-button">Brugertilpasning</button>
                <button className="option-button">Mine grupper</button>
            </div>

            <div className="profile-extras">
                <button className="option-button">Inviter venner</button>
                <button className="option-button">Hjælpecenter</button>
                <button className="option-button">Om Lendly</button>
            </div>

            <div className="profile-holiday">
                <button className="option-button">Ferie­tilstand</button>
            </div>
        </div>
        </>
    );
}

export default Profil;

