import React from 'react';
import "../assets/styles/home.css";
import myImage from "../assets/images/img1.jpg";
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="holder">
                    <div className="maincontainer content">

                        {/* Content Divs */}
                        <div className="main-div1" data-aos="fade-right">
                            <h3 className="c1" data-aos="fade-down">Hello &#128075;, it's me</h3>
                            <h3 className="animate-charcter" data-aos="zoom-in">Gokul Selvan</h3>

                            <h3 className="intro-heading" data-aos="fade-up">
                                I am
                                <span className="typewriter-text">
                                    <Typewriter
                                        words={[
                                            " MERN Stack Enthusiast",
                                            " Aspiring Full-Stack Developer"
                                            // " Passionate About Building Web Apps"
                                        ]}
                                        loop={false}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={90}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h3>

                            <br />

                            <div className="main-btn-container" data-aos="fade-up">
                                <a href="#contact" className="main-btn-contact">Contact me</a>
                                <a
                                    className="main-btn-resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/file/d/1abT69J_SFPwafCO357mh5QZ7Urn5t3BX/view?usp=drivesdk"
                                >
                                    Check Resume
                                </a>
                            </div>

                            <div className="social" data-aos="fade-up" data-aos-delay="300">
                                <a href="https://www.linkedin.com/in/gokul-selvan16/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                                <a href="https://github.com/Gokul1234678"><i className="bx bxl-github" target="_blank" rel="noopener noreferrer"></i></a>
                                <a href="mailto:gokul1672003@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-gmail"></i></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>

                            </div>
                        </div>

                        <div className="main-div2" data-aos="fade-left">
                            <img src={myImage} alt="Profile picture of Gokul Selvan" className="img1" />
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}

export default Home;
