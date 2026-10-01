import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
} from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import project images
import cableImg from "../assets/images/projectsImages/cable.png";
import mobileMartImg from "../assets/images/projectsImages/mm.PNG";
import vetriMatrimonyImg from "../assets/images/projectsImages/vetriMatrimonyImg.jpg";

// Project CSS
import "../assets/styles/Project.css";


// ===============================
// PROJECT DATA
// ===============================

const projects = [
    {
        id: 1,
        title: "MobileMart - Full Stack MERN E-Commerce",
        year: "2026",
        description:
            "A complete full-stack e-commerce application for mobile shopping, featuring secure authentication, product search and filtering, cart management, order history, Razorpay payment integration, forgot password functionality with Brevo, and an admin dashboard for managing products, users, and orders.",
        image: mobileMartImg,
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "Bootstrap",
            "JWT",
            "Cloudinary",
            "Razorpay",
            "Brevo",
        ],
        code: "https://github.com/Gokul1234678/mobile-mart",
        live: "https://mobile-mart-lime.vercel.app/",
    },

    {
        id: 2,
        title: "Cable Management System (MERN Stack)",
        year: "2025",
        description:
            "A full-stack web application for cable service providers to manage customers, plans, and payments efficiently. Built using the MERN stack with a responsive admin dashboard and RESTful API integration.",
        image: cableImg,
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        code: "https://github.com/Gokul1234678/cable-admin",
        live: "https://cable-admin.vercel.app/",
    },

    {
        id: 3,
        title: "Vetri Matrimony (MERN Stack)",
        year: "2026",
        description:
            "A full-stack matrimony platform with secure authentication, profile management, search and filters, credit-based profile unlocking, Cloudinary image uploads, and a responsive admin dashboard with profile view reports.",
        image: vetriMatrimonyImg,
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Bootstrap",
            "Cloudinary",
            "JWT",
        ],

        // No GitHub or Live Demo link
        // Buttons will automatically be hidden.
    },
];


// ===============================
// PROJECT SLIDER COMPONENT
// ===============================

const ProjectSlider = () => {
    return (
        <>
            <div className="container" id="projects">
                <div className="holder">

                    <div
                        className="project-slider-container"
                        data-aos="fade-up"
                    >

                        {/* Section Title */}
                        <h2
                            className="slider-title"
                            data-aos="zoom-in"
                        >
                            My Projects
                        </h2>


                        {/* Swiper */}
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}

                            coverflowEffect={{
                                rotate: 50,
                                stretch: -50,
                                depth: 300,
                                modifier: 3,
                                slideShadows: false,
                            }}

                            pagination={{
                                clickable: true,
                            }}

                            navigation={true}

                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}

                            loop={true}

                            spaceBetween={20}

                            // Responsive breakpoints
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },

                                640: {
                                    slidesPerView: 1,
                                },

                                768: {
                                    slidesPerView: 2,
                                },

                                1024: {
                                    slidesPerView: 3,
                                },
                            }}

                            modules={[
                                EffectCoverflow,
                                Pagination,
                                Navigation,
                                Autoplay,
                            ]}

                            className="project-swiper"
                        >

                            {/* ===============================
                                PROJECT CARDS
                            =============================== */}

                            {projects.map((project) => (

                                <SwiperSlide
                                    key={project.id}
                                    className="project-slide"
                                >

                                    <div
                                        className="project-card"
                                        data-aos="fade-up"
                                    >

                                        {/* Project Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />


                                        {/* Project Overlay */}
                                        <div className="overlay">

                                            {/* Project Title */}
                                            <h3>
                                                {project.title}
                                            </h3>


                                            {/* Project Description */}
                                            <p>
                                                {project.description}
                                            </p>


                                            {/* ===============================
                                                TECH STACK
                                            =============================== */}

                                            <ul className="tech-stack">

                                                {project.tech.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}

                                            </ul>


                                            {/* ===============================
                                                PROJECT BUTTONS
                                            =============================== */}

                                            {/* 
                                                The button container itself
                                                will only appear when at least
                                                one link exists.
                                            */}

                                            {(project.code || project.live) && (

                                                <div className="btn-group">

                                                    {/* GitHub Button */}

                                                    {project.code && (
                                                        <a
                                                            href={project.code}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            View Code
                                                        </a>
                                                    )}


                                                    {/* Live Demo Button */}

                                                    {project.live && (
                                                        <a
                                                            href={project.live}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Live Demo
                                                        </a>
                                                    )}

                                                </div>

                                            )}

                                        </div>

                                    </div>

                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>

                </div>
            </div>
        </>
    );
};


export default ProjectSlider;