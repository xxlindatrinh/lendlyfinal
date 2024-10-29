import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/BottomNav.css'; // Importing BottomNav.css for styling




function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className="nav-item">
                <img src="/ikoner/hjem_ikon.svg" alt="Home Icon" /> 
            </NavLink>
            <NavLink to="/Kategori" className="nav-item">
                <img src="/ikoner/søge_ikon.svg" alt="Home Icon" />
            </NavLink>
            <NavLink to="/Upload" className="nav-item">
                <img src="/ikoner/upload_ikon.svg" alt="Home Icon" />
            </NavLink>
            <NavLink to="/OpretProfil" className="nav-item">
                <img src="/ikoner/indbakke_ikon.svg" alt="Home Icon" />
            </NavLink>
            <NavLink to="/Profil" className="nav-item">
                <img src="/ikoner/profil.svg" alt="Home Icon" />
            </NavLink>
        </nav>
    );
}

export default BottomNav;

