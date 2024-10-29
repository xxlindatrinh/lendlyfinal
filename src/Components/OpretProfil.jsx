import React, { useState } from "react";
import "../css/Opretprofil.css";

const Opretprofil = () => {
  const [action, setAction] = useState("Opret dig");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="/ikoner/user.svg" alt="" />
            <input type="text" placeholder="Navn" />
          </div>
        )}

        <div className="input">
          <img src="/ikoner/email.svg" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="/ikoner/password.svg" alt="" />
          <input type="password" placeholder="Adgangskode" />
        </div>
      </div>

      {action === "Opret dig" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Glemt adgangskode? <span>Klik her</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Opret dig");
          }}
        >
          Opret dig
        </div>
        <div
          className={action === "Opret dig" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Opretprofil;
