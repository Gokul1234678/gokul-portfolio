import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css"; // adjust path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showAlert = () => {
    alert("The live demo for this project is currently unavailable. Please check back later.");
  };

  const showCodeAlert = () => {
    alert("Source code currently unavailable for this project.");
  };

  return (

    <div className="container" >
      <div className="holder">
        <nav >
          {/* <div className="holder"> */}
          <div className="logo" data-aos="fade-down" data-aos-delay="200">Gokul Selvan</div>

          {/* Nav links */}
          <ul className={isMenuOpen ? "show-menu" : ""} >
            {/* <li><a href="#home">Home</a></li> */}
            <li data-aos="fade-down" data-aos-delay="300">
              <a href="#about">About</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="400">
              <a href="#Skills">Skills</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="500">
              <a
                href="https://drive.google.com/file/d/1abT69J_SFPwafCO357mh5QZ7Urn5t3BX/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="600">
              {/* <a href="/certificates" target="_blank" rel="noopener noreferrer">
                Certificates
              </a> */}

              <Link to="/certificates">
                Certificates
              </Link>

            </li>
            <li data-aos="fade-down" data-aos-delay="700">
              <a href="#projects">Projects</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="800">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="menu" onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          {/* </div> */}
        </nav></div></div>

  );
};

export default Navbar;
