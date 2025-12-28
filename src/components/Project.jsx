import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// this css all from swiper library
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import projects images
import crudImg from "../assets/images/projectsImages/crud.png";
import cableImg from "../assets/images/projectsImages/cable.png";
import ecommerceImg  from "../assets/images/projectsImages/ecommerce.png";
import weatherImg from "../assets/images/projectsImages/weather.jpg";
import currencyImg from "../assets/images/projectsImages/currency.PNG";
import todoImg from "../assets/images/projectsImages/todo.png";
import calculatorImg from "../assets/images/projectsImages/calculator.png";
import portfolio from "../assets/images/projectsImages/portfolio.jpg";
import GuestHouseImg from "../assets/images/projectsImages/guestHouse.jpg";

// not using now
// import  digitalclockImg from "../assets/images/projectsImages/digital clock.png";


// this is my css
import "../assets/styles/Project.css";

const projects = [
    {
        id: 1,
        title: "Cable Management System (MERN Stack)",
        year: "2025",
        description:
            "A full-stack web application for cable service providers to manage customers, plans, and payments efficiently. Built using the MERN stack with a responsive admin dashboard and RESTful API integration.",
        image: cableImg,
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        code: "https://github.com/Gokul1234678/cable-admin",
        live: "https://cable-admin.vercel.app/",
    },
    {
        id: 2,
        title: "MERN CRUD Application",
        year: "2025",
        description:
            "A full-stack CRUD web application with image upload support. Users can add, view, edit, and delete records, with profile images stored securely using Cloudinary.",
        image: crudImg,
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
        code: "https://github.com/Gokul1234678/mern-crud-app",
        live: "https://mern-crud-gokul.vercel.app/",
    },
    {
        id: 3,
        title: "E-Commerce Website (React)",
        year: "2025",
        description:
            "Built a responsive e-commerce website using React with dynamic product listing, search, sorting, cart, and wishlist features. Implemented secure user login and protected routes using Firebase. Integrated FakeStore API and deployed on Netlify.",
        image: ecommerceImg,
        tech: ["React.js", "CSS", "React Router", "FakeStore API", "Firebase"],
        code: "https://github.com/Gokul1234678/react-ecommerce-simulation",
        live: "https://ecommerce-react16.netlify.app/",
    },
    {
        id: 4,
        title: "Portfolio Website",
        year: "2024",
        description:
            "A personal portfolio website showcasing my projects, skills, and contact details with smooth animations and responsive design.",
        image: portfolio,
        tech: ["React.js", "CSS", "AOS", "Netlify"],
        code: "https://github.com/Gokul1234678/gokul-portfolio/",
        live: "https://gokul-selvan-dev.netlify.app/",
    },
    {
        id: 5,
        title: "Weather App",
        year: "2024",
        description:
            "A responsive weather application that fetches real-time temperature, humidity, and weather conditions using an external API. Designed with a clean UI and fast loading experience.",
        image: weatherImg,
        tech: ["HTML", "CSS", "JavaScript", "API"],
        code: "https://github.com/Gokul1234678/weather-Application",
        live: "https://lucent-fenglisu-eaa7a4.netlify.app/",
    },
    {
        id: 6,
        title: "Currency Converter",
        year: "2024",
        description:
            "A simple and responsive currency converter to convert amounts between international currencies. Uses a public API to fetch live exchange rates and displays accurate results instantly.",
        image: currencyImg,
        tech: ["HTML", "CSS", "JavaScript", "API"],
        code: "https://github.com/Gokul1234678/Currency-Converter",
        live: "https://ags-currency-converter.netlify.app/",
    },
    {
        id: 7,
        title: "Todo List",
        year: "2023",
        description:
            "A clean and responsive to-do list application with add, edit, and delete functionality. Designed with a simple UI and fast interaction experience.",
        image: todoImg,
        tech: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/Gokul1234678/to-do-list",
        live: "https://ags16.neocities.org/todo%20list/todo%20list",
    },
    {
        id: 8,
        title: "React Calculator",
        year: "2024",
        description:
            "A modern calculator built with React for performing basic arithmetic operations. Responsive UI with smooth button interactions and accurate calculations.",
        image: calculatorImg,
        tech: ["React.js", "CSS"],
        code: "https://github.com/Gokul1234678/react_calculator",
        live: "https://react-calculator-chi-opal.vercel.app/",
    },
    {
        id: 9,
        title: "Guest House Website",
        year: "2024",
        description:
            "A redesigned website for the King Sukh Guest House, created during an internship assignment. Features a modern layout, improved visuals, and responsive design.",
        image: GuestHouseImg,
        tech: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/Gokul1234678/kingsukh-guest-house-website/tree/main",
        live: "https://ags16.neocities.org/guest%20house%20website/",
    },
];



const ProjectSlider = () => {
    return (
        <>
            <div className="container " id="projects">
                <div className="holder">
                    <div className="project-slider-container" data-aos="fade-up">
                        <h2 className="slider-title" data-aos="zoom-in">My Projects</h2>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: -50,
                                depth: 300,
                                modifier: 3,
                                slideShadows: false

                            }}
                            pagination={{ clickable: true }}
                            navigation
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true, // ✅ pauses when hovered
                                disableOnInteraction: false, // ✅ keeps autoplay running after interactions
                            }}
                            loop={true}
                            spaceBetween={20}
                            // Responsive breakpoints
                            breakpoints={{
                                320: { slidesPerView: 1 },   // mobile
                                640: { slidesPerView: 1 },   // small tablets
                                768: { slidesPerView: 2 },   // tablets
                                1024: { slidesPerView: 3 },  // desktops
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // ✅ include Autoplay
                            className="project-swiper"
                        >

                            {projects.map((project) => (
                                <SwiperSlide key={project.id} className="project-slide">
                                    <div className="project-card" data-aos="fade-up">
                                        <img src={project.image} alt={project.title} />
                                        <div className="overlay">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>

                                            {/* Tech stack */}
                                            <ul className="tech-stack">
                                                {project.tech.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>

                                            <div className="btn-group">
                                                <a href={project.code} target="_blank" rel="noopener noreferrer">
                                                    View Code
                                                </a>
                                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                    Live Demo
                                                </a>
                                            </div>
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
