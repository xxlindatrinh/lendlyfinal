import React, { useState } from "react";
import "../css/Onboarding.css";

function Onboarding() {
  const [page, setPage] = useState(1);

  // Function to handle "Accepter" button
  const handleAccept = () => {
    if (page < 3) {
      setPage(page + 1); // Go to the next onboarding page
    }
    // Add logic to proceed if onboarding is complete
  };

  return (
    <div className="onboarding-container">
      {page === 1 && (
        <div className="terms-container">
          <h1>Generelle vilkår og betingelser</h1>
          <ul className="terms-list">
            <li>
              Ved brug af vores tjeneste accepterer du de følgende vilkår og
              betingelser. Læs dem grundigt, da de regulerer din brug af vores
              platform.
            </li>
            <li>
              Vores tjeneste er til personlig og ikke-kommerciel brug. Du må
              ikke kopiere, distribuere eller modificere indholdet uden
              skriftlig tilladelse.
            </li>
            <li>
              Vi behandler dine personoplysninger i overensstemmelse med vores
              privatlivspolitik. Dine data opbevares sikkert og vil ikke blive
              delt med tredjeparter uden dit samtykke.
            </li>
          </ul>
          <div className="switches">
            <div>
              <span>Brugerbetingelser</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>Privatlivs-og cookiepolitik</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>Modtag nyheder fra Lendly</span>
              <input type="checkbox" />
            </div>
          </div>
          <button className="accept-button" onClick={handleAccept}>
            Accepter
          </button>
        </div>
      )}
      {page > 1 && page <= 3 && (
        <div className="image-slide">
          <img
            src={`/images/onboarding-image-${page}.jpg`}
            alt={`Onboarding Slide ${page}`}
          />
        </div>
      )}
    </div>
  );
}

export default Onboarding;
