import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
        <span className="brand-first">Moiz</span>
        <span className="brand-second">Kiyani</span>
      </Link>
      
      {/* Desktop Links */}
      <div className="nav-right desktop-only">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </div>
        <a href="#contact" className="btn-hire">Hire me</a>
      </div>

      {/* Mobile Toggle Button */}
      <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
        {isMenuOpen ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c7a856" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`nav-mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/portfolio" className="mobile-nav-link" onClick={toggleMenu}>Portfolio</Link>
          <a href="#contact" className="mobile-btn-hire" onClick={toggleMenu}>Hire me</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
