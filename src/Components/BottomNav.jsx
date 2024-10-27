import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/BottomNav.css'; // Importing BottomNav.css for styling

function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className="nav-item">
                <i className="icon">🏠</i>
                <span>Hjem</span>
            </NavLink>
            <NavLink to="/Kategori" className="nav-item">
                <i className="icon">📁</i>
                <span>Søg</span>
            </NavLink>
            <NavLink to="/Upload" className="nav-item">
                <i className="icon">👤</i>
                <span>Upload</span>
            </NavLink>
            <NavLink to="/OpretProfil" className="nav-item">
                <i className="icon">➕</i>
                <span>Indbakke</span>
            </NavLink>
            <NavLink to="/Profil" className="nav-item">
                <i className="icon">⚙️</i>
                <span>Profil</span>
            </NavLink>
        </nav>
    );
}

export default BottomNav;

