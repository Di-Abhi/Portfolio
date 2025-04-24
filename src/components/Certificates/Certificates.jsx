import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Certificates.css";

const certificates = [
  {
    title: "Full Stack Web Development",
    description: "Completed a comprehensive course on full stack web development.",
    image: "/certificates/react.png", // Replace with your actual image paths
  },
  {
    title: "DSA Mastery Certificate",
    description: "Achieved mastery in Data Structures and Algorithms through rigorous training.",
    image: "/certificates/c3.png",
  },
  {
    title: "Node.js Certification",
    description: "Certified in Node.js and Express.js for backend development.",
    image: "/certificates/c2.png",
  },
  {
    title: "Cloud Computing",
    description: "Certified in cloud computing fundamentals and AWS services.",
    image: "/certificates/c4.png",
  },
];

const Certificates = () => {
  useEffect(() => {
    ScrollReveal().reveal(".certificates-title", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: true,
    });

    ScrollReveal().reveal(".certificate-card", {
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 300,
      interval: 200,
      opacity: 0,
      reset: true,
    });
  }, []);

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
