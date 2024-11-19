// Camilla
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Loadingscreen.css";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    // Timer til at navigere til OpretProfil efter 3 sekunder
    const timer = setTimeout(() => {
      navigate("/OpretProfil");
    }, 5000);

    // Ryd timeren, hvis komponenten unmountes
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <img src="ikoner/Lendlylogo.svg" alt="Lendly Logo" className="logo" />
    </div>
  );
}

export default Loading;
