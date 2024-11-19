// Camilla

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../css/Onboarding.css";

function Onboarding() {
  const [page, setPage] = useState(0); // 0 for betingelser, 1 for første onboarding side
  const navigate = useNavigate(); // Used for navigation

  // Funktion til at styre klik eller swipe til næste slide
  const handleNextPage = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };

  // Funktion til at lukke onboarding
  const handleClose = () => {
    navigate("/"); // Navigerer til forside
  };

  // Touch event listeners for at kunne swipe mellem onboarding sider
  useEffect(() => {
    const handleTouchStart = (e) => {
      const touchStartX = e.touches[0].clientX;

      const handleTouchMove = (e) => {
        const touchEndX = e.touches[0].clientX;

        //  Swipe højre for at gå tilbage
        if (touchEndX - touchStartX > 50) {
          setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
          document.removeEventListener("touchmove", handleTouchMove);
        }

        // Swipe venstre for at gå frem
        if (touchStartX - touchEndX > 50) {
          handleNextPage();
          document.removeEventListener("touchmove", handleTouchMove);
        }
      };

      document.addEventListener("touchmove", handleTouchMove);
    };

    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [page]);

  // Accepter knap navigerer til onboarding
  const handleAccept = () => {
    setPage(1); // Går til første onboarding side
  };

  return (
    <div className="onboarding-container" onClick={handleNextPage}>
      {page === 0 && (
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
      {page >= 1 && page <= 3 && (
        <div className="image-slide">
          <button className="close-button" onClick={handleClose}>
            ✕
          </button>{" "}
          {/* Luk knap */}
          {page === 1 && (
            <>
              <h2>Vælg lokation</h2>
              <img
                src={`ikoner/find_lokation.svg`}
                alt="Onboarding Slide 1"
                className="location-image onboarding-image-1"
              />
              <p>
                For at gøre din oplevelse så personlig som muligt, beder vi dig
                om at sætte din lokation til. Dette vil hjælpe os med at finde
                genstande og tjenester, der er tilgængelige i dit område. Ved at
                angive din lokation kan du nemt opdage spændende muligheder tæt
                på dig, hvilket gør det lettere at leje og udleje.
              </p>
            </>
          )}
          {page === 2 && (
            <>
              <h2>Lej og udlej</h2>
              <img
                src={`ikoner/laan_og_del.svg`}
                alt="Onboarding Slide 2"
                className="location-image onboarding-image-2"
              />
              <p>
                Her kan du nemt leje genstande, du har brug for til specifikke
                anledninger, eller udleje ting, du ikke længere bruger. Uanset
                om det er festudstyr, sportsudstyr eller teknisk udstyr, har vi
                dig dækket. Med et par klik kan du finde det, du skal bruge,
                eller dele dine egne genstande med andre.
              </p>
            </>
          )}
          {page === 3 && (
            <>
              <h2>Lej og udlej sikkert</h2>
              <img
                src={`ikoner/laan_sikkert.svg`}
                alt="Onboarding Slide 3"
                className="location-image onboarding-image-3"
              />
              <p>
                Når du lejer eller udlejer gennem vores platform, kan du være
                sikker på, at din oplevelse er både sikker og pålidelig. Vi
                prioriterer din tryghed ved at implementere grundige
                verifikationsprocedurer for både lejere og udlejere. Vores
                platform tilbyder sikre betalingsmetoder, så du kan fokusere på
                at finde det, du har brug for, eller dele dine genstande uden
                bekymringer.
              </p>
            </>
          )}
          {/* Onboarding prikker, for at se hvor langt man er */}
          <div className="pagination-dots">
            {[1, 2, 3].map((dotPage) => (
              <span
                key={dotPage}
                className={`dot ${page === dotPage ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
