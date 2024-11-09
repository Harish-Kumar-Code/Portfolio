import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <h1 className="logo">
                    <img src="/logo.png" alt="Harish Kumar Logo" />
                </h1>
                <ul className="nav-links">
                    <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
                    <li><NavLink to="/skills" activeClassName="active-link">Skills</NavLink></li>
                    <li><NavLink to="/Expertise" activeClassName="active-link">Expertise</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active-link">Projects</NavLink></li>
                </ul>
                <div className="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
