// Camilla
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Opretprofil.css";

const Opretprofil = () => {
  const [action, setAction] = useState("Opret dig");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      (action === "Opret dig" && name && email && password) ||
      (action === "Login" && email && password)
    ) {
      console.log(
        "Navigating to:",
        action === "Opret dig" ? "/Onboarding" : "/Forside"
      );
      if (action === "Opret dig") {
        navigate("/Onboarding");
      } else {
        navigate("/Forside");
      }
    } else {
      alert("Udfyld venligst alle felter");
    }
  };

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
            <input
              type="text"
              placeholder="Navn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src="/ikoner/email.svg" alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src="/ikoner/password.svg" alt="" />
          <input
            type="password"
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            handleSubmit();
          }}
        >
          Opret dig
        </div>
        <div
          className={action === "Opret dig" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
            if (action === "Login") {
              handleSubmit();
            }
          }}
        >
          Login
        </div>
      </div>

      {}
    </div>
  );
};

export default Opretprofil;
