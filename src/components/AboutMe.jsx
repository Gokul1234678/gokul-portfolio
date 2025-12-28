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
    <h2 data-aos="fade-down">About Me</h2>

    <p data-aos="fade-up" data-aos-delay="200">
        I’m <strong>Gokul Selvan</strong>, a <strong>MERN Stack Developer</strong> passionate about building clean, fast, 
        and user-friendly web applications. I specialize in 
        <strong> React, Node.js, Express, and MongoDB</strong>, and I enjoy turning ideas into efficient, real-world digital solutions.
    </p>

    <br />

    <p data-aos="fade-up" data-aos-delay="300">
        I completed my <strong>B.Sc. in Computer Science (2024)</strong> from 
        <strong> Aditanar College of Arts and Science</strong>, graduating with a 
        <strong> CGPA of 8.00</strong>. I have also completed a full <strong>MERN Stack Development</strong> course 
        from <strong>Acme Infotek</strong>, where I gained hands-on experience with full-stack application development.
    </p>

    <br />

    <p data-aos="fade-up" data-aos-delay="350">
        Since then, I’ve built multiple full-stack projects including an E-Commerce platform, a MERN CRUD system with Cloudinary, 
        and a Cable Management System with secure APIs and admin tools.
    </p>

    <br />

    <p data-aos="fade-up" data-aos-delay="400">
        I’m continuously learning, improving, and working toward creating impactful products that deliver real value.
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
