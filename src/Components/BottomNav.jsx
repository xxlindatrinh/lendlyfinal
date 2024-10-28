import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/BottomNav.css'; // Importing BottomNav.css for styling




function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className="nav-item">
                <img src="../ikoner/hjem_ikon.svg" alt="Home Icon" />
            </NavLink>
            <NavLink to="/Kategori" className="nav-item">
                <i className="icon">📁</i>
            </NavLink>
            <NavLink to="/Upload" className="nav-item">
                <i className="icon">➕</i>
            </NavLink>
            <NavLink to="/OpretProfil" className="nav-item">
                <i className="icon">➕</i>
            </NavLink>
            <NavLink to="/Profil" className="nav-item">
                <i className="icon">👤</i>
            </NavLink>
        </nav>
    );
}

export default BottomNav;

