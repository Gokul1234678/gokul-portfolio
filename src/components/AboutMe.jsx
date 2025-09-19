import React from "react";
import "../assets/styles/AboutMe.css";
import myImage from "../assets/images/img5.jpg";
const AboutMe = () => {
    return (
        <>
            <div className="container">
                <div className="holder">
                    <section className="about" id="about">
                        <div className="about-content">
                            <div className="about-image"  data-aos="fade-right">
                                <img src={myImage} alt="Profile" />
                            </div>
                            <div className="about-text" data-aos="fade-left">
                                <h2  data-aos="fade-down">About Me</h2>
                                <p data-aos="fade-up" data-aos-delay="200">
                                    I’m <strong>Gokul Selvan</strong>, a fresher with a <strong>B.Sc. in Computer Science</strong> from
                                    Aditanar College of Arts and Science, graduating with a <strong>CGPA of 8.00</strong>, and an aspiring
                                    <strong> MERN Stack Developer</strong>.
                                    I specialize in <strong>JavaScript, React, Node.js, Express, and MySQL/MongoDB</strong>, and I enjoy
                                    building responsive, user-friendly web applications.
                                </p>

                                <br />

                                <p data-aos="fade-up" data-aos-delay="400">
                                    I’m eager to begin my career as a <strong>MERN Stack Developer</strong>, contribute to impactful
                                    real-world projects, and continuously enhance my skills.
                                </p>


                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>

    );
};


export default AboutMe;
