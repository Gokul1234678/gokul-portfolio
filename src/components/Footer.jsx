import React from "react";
import "../assets/styles/footer.css";

// Import your PNG images
import githubIcon from "../assets/images/icons/github.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import instagramIcon from "../assets/images/icons/insta.png";
import facebookIcon from "../assets/images/icons/f.png";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-container" >

        {/* Quick Links */}
        <ul className="footer-links" >
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-social" >
          <a href="https://github.com/Gokul1234678" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/gokul-selvan16" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy" >
          &copy; {new Date().getFullYear()} Gokul Selvan. All rights reserved.
        </p>
      </div>
    </footer>
  )
    
  
}

export default Footer;
