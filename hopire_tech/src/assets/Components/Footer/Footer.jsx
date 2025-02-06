// Footer.jsx
import React from 'react';
import { Link } from "react-router-dom";
import logo from "/logo.png";
import {FaMapMarkerAlt,FaPhoneAlt, FaEnvelope,FaLinkedin,FaInstagram,FaGithub,FaFacebook} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const handleMailClick = () => {
      window.location.href = "mailto:hopiretech@gmail.com";
    };

    const handlePhoneClick = () => {
      window.location.href = "tel:9398983918";
    };

    const handleLocClick = () => {
        window.location.href = "https://maps.app.goo.gl/ovy961XVPHQeHqU28";
    }
    return (
      <footer className="footer">
        <div className="container">
          <div className="main-content">
            <div className="footer-logo">
                <img src={logo} alt="logo" />
            <div className="header-section" handleLocClick={handleLocClick}>
              <h2>Have a project in mind? Let's Build Something Amazing Together.</h2>
              <p>Get in Touch!</p>
            </div>
            </div>
            <div className="contact-grid">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Kadiri Road, Angallu village, Madanapalle, Andhra Pradesh</span>
              </div>
              <div className="contact-item" onClick={handlePhoneClick}>
                <FaPhoneAlt />
                <span>9398983918</span>
              </div>
              <div className="contact-item" onClick={handleMailClick}>
                <FaEnvelope />
                <span>hopiretech@gmail.com</span>
              </div>
            </div>

            <div className="nav-social">
              <nav className="navigation">
                <ul>
                  <li><Link to="/about">ABOUT US</Link></li>
                  <li><Link to="/contact">CONTACT US</Link></li>
                  <li><Link to="/services">SERVICES</Link></li>
                  <li><Link to="/portfolio">PORTFOLIO</Link></li>
                </ul>
              </nav>
              
              <div className="social-media">
                <span>Social Media</span>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </Link>
                <Link to="https://github.com/Hopire" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>Copyright © 2025 • Hopire Tech Solutions</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;