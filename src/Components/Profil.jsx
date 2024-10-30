import '../css/Profil.css';

function Profil() {
    return (
        <div className="profil-container">
            <header className="profil-header">
                <button className="back-button">Tilbage</button>
                <h1>Profil</h1>
            </header>
            
            <div className="profile-info">
                <div className="profile-picture">
                    <img src="ikoner/profil.svg" alt="Profile" />
                </div>
                <div className="profile-name">
                    <p>Mit navn</p>
                    <span>Vis min profil</span>
                </div>
            </div>

            <div className="profile-options">
                <button className="option-button">Din guide til Lendly</button>
                <button className="option-button">Mine favoritter</button>
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
    );
}

export default Profil;

