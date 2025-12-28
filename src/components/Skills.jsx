import React from "react";
import "../assets/styles/Skills.css";
import expressImg from "../assets/images/express.jpg";
import mongoDb from "../assets/images/mongoDb.jpg";
import materialUi from "../assets/images/materialUi.png";
import mySql from "../assets/images/mySql.png";
import Redux from "../assets/images/Redux.png";
import restApi from "../assets/images/restApi.jpg";
import vite from "../assets/images/vite.jfif";


const Skills = () => {
    return (
        <>
            <div className="container">
                <div className="holder">
                    <div className="skill-container" id="Skills">
                        <div className="skill-div1" data-aos="fade-up">
                            <p style={{ fontWeight: "bold", textAlign: "center" }}>How I Can Contribute & My Key Skills</p>
                            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                                🤝 What I Bring to the Table
                            </h3>
                        </div>

                        <br />

<div className="skill-div2">

    {/* Frontend */}
    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-html5 skill-icon" style={{ color: "orangered" }}></i>
        <p>HTML5</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-css3-alt skill-icon" style={{ color: "rgb(1, 49, 182)" }}></i>
        <p>CSS3</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-js skill-icon" style={{ color: "rgb(235, 231, 7)" }}></i>
        <p>JavaScript (ES6+)</p>
    </div>

    {/* React Ecosystem */}
    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-react skill-icon" style={{ color: "cyan" }}></i>
        <p>React</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <img src={vite} alt="vite" className="skill-img" />
        <p>Vite</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <img src={Redux} alt="Redux" className="skill-img" />
        <p>Redux</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <img src={materialUi} alt="Material UI" className="skill-img" />
        <p>Material UI</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-bootstrap skill-icon" style={{ color: "rgb(137, 0, 179)" }}></i>
        <p>Bootstrap 5</p>
    </div>

    {/* Backend */}
    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-node-js skill-icon" style={{ color: "#81CE27" }}></i>
        <p>Node.js</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <img src={expressImg} alt="Express" className="skill-img" />
        <p>Express.js</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <img src={restApi} alt="REST API" className="skill-img" />
        <p>REST API</p>
    </div>

    {/* Databases */}
    <div className="skill" data-aos="zoom-in">
        <img src={mongoDb} alt="MongoDb" className="skill-img" />
        <p>MongoDB</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <img src={mySql} alt="MySql" className="skill-img" />
        <p>MySQL</p>
    </div>

    {/* Tools */}
    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-git-alt skill-icon" style={{ color: "red" }}></i>
        <p>Git</p>
    </div>

    <div className="skill" data-aos="zoom-in">
        <i className="fa-brands fa-github skill-icon" style={{ color: "black" }}></i>
        <p>GitHub</p>
    </div>

    {/* Other */}
    <div className="skill" data-aos="zoom-in">
        <i
            className="fa-brands fa-python skill-icon"
            style={{
                background: "linear-gradient(140deg, #306998 50%, #ffd43b 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
        ></i>
        <p>Python</p>
    </div>

</div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;