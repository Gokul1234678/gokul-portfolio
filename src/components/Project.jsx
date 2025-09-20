import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// this css all from swiper library
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import projects images
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
        title: "Weather App",
        description: "A responsive weather application that fetches real-time weather data using an API.",
        image: weatherImg,
        tech: ["HTML", "CSS", "JavaScript", "API"],
        code: "https://github.com/Gokul1234678/weather-Application",
        live: "https://lucent-fenglisu-eaa7a4.netlify.app/",
    },
    {
        id: 2,
        title: "Portfolio",
        description: "A personal portfolio website showcasing my projects, skills, and contact information.",
        image: portfolio,
        tech: ["react","HTML", "CSS", "AOS","netlify"],
        code: "https://github.com/Gokul1234678/gokul-portfolio/",
        live: "https://gokul-selvan-dev.netlify.app/",
    },
    {
        id: 3,
        title: "Currency Converter",
        description: "A responsive currency converter app to convert values between different currencies using an API.",
        image: currencyImg,
        tech: ["HTML", "CSS", "JavaScript", "API"],
        code: "https://github.com/Gokul1234678/Currency-Converter",
        live: "https://ags-currency-converter.netlify.app/",
    },
    {
        id: 4,
        title: "Todo List",
        description: "A responsive calculator app for performing basic operations.",
        image: todoImg,
        tech: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/Gokul1234678/to-do-list",
        live: "https://ags16.neocities.org/todo%20list/todo%20list",
    },
    {
        id: 5,
        title: "React Calculator",
        description: "A responsive calculator app for performing basic operations.",
        image: calculatorImg,
        tech: ["React","HTML", "CSS",],
        code: "https://github.com/Gokul1234678/react_calculator",
        live: "https://react-calculator-chi-opal.vercel.app/",
    },
    {
        id: 6,
        title: "Guest House Website",
        description: "An internship project where I redesigned the King Sukh Guest House website with a modern responsive layout.",
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
