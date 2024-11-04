import React from 'react';
import lokationIcon from '/ikoner/lokation_ikon.svg';
import sidstSetIcon from '/ikoner/sidst_set_ikon.svg';
import stjerneIcon from '/ikoner/stjerne_ikon.svg';

import '../css/Omprofil.css'; // Import the CSS

function Omprofil() {
    return (
        <div className="omprofil">
            <button className="back-button">Tilbage</button>
            <h1 className="profile-title">Min profil</h1>

            <div className="profile-tabs">
                <span className="tab active">Om</span>
                <span className="tab">Omtaler</span>
            </div>

            <div className="profile-info">
                <div className="profile-header-content">
                    <div className="profile-avatar"></div>
                    <h2 className="profile-name">Mit navn</h2>
                </div>
                <div className="profile-details">
                    <p>
                        <img src={lokationIcon} alt="Location Icon" className="location-icon" />
                        Aarhus C, 8000
                    </p>
                    <p>
                        <img src={sidstSetIcon} alt="Timestamp Icon" className="timestamp-icon" />
                        Sidst set 7 timer siden
                    </p>
                    <p>
                        <img src={stjerneIcon} alt="Rating Icon" className="rating-icon" />
                        4,7 i bedømmelse
                    </p>
                </div>
            </div>

            <div className="profile-listings">
                <h2>Mine udlejninger</h2>
                <div className="listing-grid">
                    <div className="listing-item">
                        <div className="listing-image">
                            <img src="" alt="Bog" />
                            <span className="listing-status">Udlånt</span>
                        </div>
                        <div className="listing-info">
                            <p>Bog</p>
                            <span className="edit-icon-placeholder"></span>
                        </div>
                    </div>
                    <div className="listing-item">
                        <div className="listing-image">
                            <img src="" alt="Stige" />
                            <span className="listing-status">Udlånt</span>
                        </div>
                        <div className="listing-info">
                            <p>Stige</p>
                            <span className="edit-icon-placeholder"></span>
                        </div>
                    </div>
                    {/* More listing items */}
                </div>
            </div>
        </div>
    );
}

export default Omprofil;
