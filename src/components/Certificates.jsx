import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Certificates.css"; 
import certi_1 from "../assets/images/certificates/certi 1.jpg"
import certi_2 from "../assets/images/certificates/certi 2.jpg"
import certi_3 from "../assets/images/certificates/certi 3.jpg"
const certificateData = [
  {
    id: 1,
    title: "Python Programming",
    issuedBy: "GUVI",
    date: "December 28 2023",
    img: certi_1,
    link: "https://www.guvi.in/verify-certificate?id=1t7kV4h5g5763xia30#"
  },
  {
    id: 2,
    title: "Web Development Basics",
    issuedBy: "IBM",
    date: "15 Sep 2023",
    img: certi_2,
    link: certi_2
  },
  {
    id: 3,
    title: "HTML5 & CSS3",
    issuedBy: "GUVI",
    date: "September 08 2024",
    img: certi_3,
    link: "https://www.guvi.in/verify-certificate?id=72l0L7E1jS71574U45&course=htmlcssenglish"
  }
];

function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  const openModal = (cert) => setActiveCert(cert);
  const closeModal = () => setActiveCert(null);

  return (
    <section id="certificates">
      <h2>My Certifications</h2>
      <div className="certificate-grid">
        {certificateData.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img
              loading="lazy"
              src={cert.img}
              alt={cert.title}
              className="certificate-image"
              onClick={() => openModal(cert)}
            />
            <h3 >{cert.title}</h3>
            <p>
              Issued by {cert.issuedBy}, {cert.date}
            </p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={activeCert.img} alt={activeCert.title} />
          <div className="caption">
            {activeCert.title} - Issued by {activeCert.issuedBy}, {activeCert.date}
          </div>
        </div>
      )}

       {/* ✅ Back to Home Button */}
      <div className="back-home">
        <Link to="/" className="home-btn">
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Certificates;
