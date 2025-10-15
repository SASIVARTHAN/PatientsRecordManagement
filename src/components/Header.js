import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img 
              src={logo} 
              alt="Jarurat Care" 
              className="logo-image" 
            />
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className={isActive('/')} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/patients" className={isActive('/patients')} onClick={closeMenu}>
                Patients
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;