import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

import Navbar from "../Navbar/Navbar";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram-new.png";
import linkedin from "../Assets/linkedin-circled--v1.png";
import x from "../Assets/x.png";

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Main Contact Page */}
      <div className="contact-page">
        <div className="title-container">
          <h1>Get In Touch</h1>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          {/* Map Section */}
          <div className="map-container">
            <iframe
              className="interactive-map"
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.562325830959!2d73.7691379153833!3d18.59344498736633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9a0a7f1a9b3%3A0x8e8a6c8e3b3e3e3!2sD.%20Y.%20Patil%20College%20of%20Engineering%2C%20Akurdi%2C%20Pune!5e0!3m2!1sen!2sin!4v1663423190822!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h2>CONTACT US</h2>
              <div className="info-item">D.Y. Patil College of Engineering, Akurdi, Pune</div>
              <div className="info-item">+91 7447819903</div>
              <div className="info-item">+91 6376953742</div>
              <div className="info-item">sambhavdypcoeoffficial@gmail.com</div>
            </div>

            <div className="contact-button-container">
              <a
                href="mailto:sambhavdypcoeoffficial@gmail.com"
                className="contact-button"
              >
                Contact Here
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-column">
            <img src={logo} alt="Sambhav Logo" className="footer-logo" />
            <p className="footer-tagline">
              Sambhav'25 is one of the largest technical festivals in Pune. Let's make a tech move.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <h4 className="footer-heading">Connect</h4>
            <p>sambhavdypcoeoffficial@gmail.com</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/sambhav_dypcoe/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sambhav-tech-fest-464167259" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X/Twitter" className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Sambhav Tech Fest. All Rights Reserved.</p>
        </div>

        {/* Credits Section */}
        <div className="footer-credits">
          <h4>Credits</h4>
          <p>
            Shreeraj Babar (TECHNICAL SECRETARY), Mayuresh Kalal(TECHNICAL CO-SECRETARY), Tushar Pawar(TECHNICAL ADVISORY), Janmejay Singh Rathore (TECHNICAL LEAD), Vedant Darange (TECHNICAL COLEAD), Anam Patave, Yash Badane, Nikita Gadalikar, Sammrudhi Patabhaje, Trupti Aswar, Prajwal Methe, Garv Jain 
          </p>
        </div>
      </footer>
    </div>
  );
}
