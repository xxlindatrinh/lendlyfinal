import React, { useEffect, useState } from 'react';
import '../css/Omprofil.css'; // Import the CSS
import lokationIcon from '/ikoner/lokation_ikon.svg';
import sidstSetIcon from '/ikoner/sidst_set_ikon.svg';
import stjerneIcon from '/ikoner/stjerne_ikon.svg';
import { database } from "./firebase"; // Import Firebase setup
import { ref, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const Omprofil = () => {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listingsRef = ref(database, 'listings/');
                onValue(listingsRef, (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        // Convert Firebase object into array
                        const listingsArray = Object.keys(data).map(key => ({
                            id: key,
                            ...data[key]
                        }));
                        console.log("Fetched Listings: ", listingsArray); // Console log for debugging
                        setListings(listingsArray);
                    } else {
                        setListings([]);
                    }
                });
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        };

        fetchListings();
    }, []);

    return (
        <div className="omprofil">
            <header className="profile-header">
                <div id='back-button'>
                    <button className="back-button" onClick={() => navigate(-1)}>&lt; Tilbage</button>
                </div>
                <h1 className="profile-title">Min profil</h1>
                <div className="profile-tabs">
                    <div className="tab active">Om</div>
                    <div className="tab">Omtaler</div>
                </div>
            </header>
            <section className="profile-section full-width">
                <div className="profile-top">
                    <div className="profile-avatar"></div>
                    <div className="profile-details">
                        <h2>Mit navn</h2>
                    </div>
                </div>
                <div className="profile-section-content">
                    <div className="profile-info-item">
                        <img src={lokationIcon} alt="Location icon" />
                        <p>Aarhus C, 8000</p>
                    </div>
                    <div className="profile-info-item">
                        <img src={sidstSetIcon} alt="Clock icon" />
                        <p>Sidst set 7 timer siden</p>
                    </div>
                    <div className="profile-info-item">
                        <img src={stjerneIcon} alt="Star icon" />
                        <p>4,7 i bedømmelse</p>
                    </div>
                </div>
            </section>
            <section className="profile-listings">
                <h2>Mine udlejninger</h2>
                <div className="listing-grid">
                    {listings.length > 0 ? (
                        listings.map((listing) => (
                            <div key={listing.id} className="listing-item">
                                <div className="listing-image">
                                    <img
                                        src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : `${process.env.PUBLIC_URL}/img/elektrisk-høvl.webp`}
                                        alt={listing.title}
                                        style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                    {listing.isRented && (
                                        <div className="listing-status">Udlånt</div>
                                    )}
                                </div>
                                <div className="listing-info">
                                    <p>{listing.title}</p>
                                    <span className="edit-icon-placeholder"></span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Ingen udlejninger fundet</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Omprofil;
