import React, { useState } from "react";
import "./Opretprofil.css";
import user_icon from "../Assets/user.svg";
import email_icon from "../Assets/email.svg";
import password_icon from "../Assets/password.svg";

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
            <img src="user_icon" alt="" />
            <input type="text" placeholder="Navn" />
          </div>
        )}

        <div className="input">
          <img src="email_icon" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
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
