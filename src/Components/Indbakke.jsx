import '../css/Indbakke.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate fra React Router

function Indbakke() {
    const navigate = useNavigate(); // Initialiser navigate til navigation

    const messages = [
        { id: 1, name: 'Michael', time: '3 timer siden', message: 'Ville det være muligt at låne den i en dag ekstra?' },
        { id: 2, name: 'Lone', time: '7 timer siden', message: 'Hvad er prisen for 2 måneder?' },
        { id: 3, name: 'Ida', time: '13 timer siden', message: 'Har du tilbehør til den?' },
        { id: 4, name: 'Casper', time: '19 timer siden', message: 'Hej! Jeg kan evt. hente i morgen efter arbejde?' }
    ];

    return (
        <>
            {/* Profil Header */}
            <div className="indbakke-container">
                <header className="indbakke-header">
                    <div id="back-button">
                        <button className="back-button" onClick={() => navigate(-1)}>
                            &lt; Tilbage
                        </button>
                    </div>
                    <div>
                        <h1>Indbakke</h1>
                    </div>
                </header>
            </div>

            {/* Indbakke */}
            <div className="indbakke">
                <div className="tabs">
                    <button className="tab">Lån</button>
                    <button className="tab active">Udlån</button>
                </div>
                <div className="messages-list">
                    {messages.map((msg) => (
                        <div key={msg.id} className="message-item">
                            <div className="message-profile">
                                <div className="profile-image"></div>
                            </div>
                            <div className="message-content">
                                <div className="message-header">
                                    <span className="message-name">{msg.name}</span>
                                    <span className="message-time">{msg.time}</span>
                                </div>
                                <p className="message-text">{msg.message}</p>
                                <div class="-image">
    <img src="path/to/your-image.jpg" alt="Description of the image" />
</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Indbakke;
