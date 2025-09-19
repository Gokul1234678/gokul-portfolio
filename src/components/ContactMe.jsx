import React from "react";
import gmailIcon from "../assets/images/icons/gmail.png";
import locationIcon from "../assets/images/icons/location.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import githubIcon from "../assets/images/icons/github.png";
// import instaIcon from "../assets/images/icons/insta.png";
// import facebookIcon from "../assets/images/icons/f.png";

import "../assets/styles/Contact.css";

const ContactMe = () => {
    return (
        <>
            <div className="container" id="contact">
                <div className="holder">
                    {/* contact start */}
                    <div className="contact-container" id="contact">
                        {/* Left Side - Contact Info */}
                        <div className="contact-info" >
                            <h1 style={{ fontWeight: 600 }} data-aos="fade-right" data-aos-delay="100">Contact Me</h1>
                            <h2 style={{ fontWeight: 500 }} data-aos="fade-right" data-aos-delay="200">Get in Touch with me</h2>

                            {/* Email */}
                            <div className="info-item" data-aos="fade-right" data-aos-delay="300">
                                <img src={gmailIcon} alt="Email Icon" />
                                <a href="mailto:gokulselvan167@gmail.com">gokulselvan167@gmail.com</a>
                            </div>

                            {/* Location */}
                            <div className="info-item" data-aos="fade-right" data-aos-delay="400">
                                <img src={locationIcon} alt="Location Icon" />
                                <p>Chennai, Tamil Nadu</p>
                            </div>

                            <hr />

                            {/* Social Links */}
                            <div className="social-follow"  data-aos="fade-up" data-aos-delay="500">
                                <p>Follow me :</p>
                                <a href="https://www.linkedin.com/in/gokul-selvan16" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                                <a href="https://github.com/Gokul1234678" target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                                {/* <a href="https://www.instagram.com/ags_gokul_?utm_source=qr&igsh=dmo1M3FjdTk5ZThy" target="_blank" rel="noopener noreferrer">
                                    <img src={instaIcon} alt="Instagram" />
                                </a>
                                <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a> */}
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}

                        <div className="contact-form" data-aos="fade-left">
                            <h2 style={{ fontWeight: 550 }}  data-aos="fade-left">Send a message</h2>
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="560063b9-cf54-4deb-af41-d89f217e249e"
                                />
                                <input data-aos="fade-left" data-aos-delay="100" type="text" name="Name" placeholder="Name" required />
                                <input data-aos="fade-left" data-aos-delay="200" type="number" name="phone number" placeholder="Phone number" required />
                                <input  data-aos="fade-left" data-aos-delay="300" type="email" name="E-mail address" placeholder="Email address" required />
                                <input  data-aos="fade-left" data-aos-delay="400" type="text" name="Subject" placeholder="Subject" required />
                                <textarea  data-aos="fade-left" data-aos-delay="500"  name="message" placeholder="Type your message here..." required></textarea>
                                <button type="submit" data-aos="zoom-in">Submit</button>
                            </form>
                        </div>
                    </div>

                    {/* contact end */}
                 
                </div></div>
        </>
    );
};

export default ContactMe;
