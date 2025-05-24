import { useEffect } from "react";
import "./Certificates.css";
import { FaCalendarAlt, FaAward, FaExternalLinkAlt, FaTag } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import c1 from "../../assets/react.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";

const certificates = [
  {
    title: "Full Stack Web Development",
    description: "Completed a comprehensive course on full stack web development covering frontend and backend technologies.",
    image: c1,
    issuer: "Coding Academy",
    date: "2024",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    credentialId: "FSW-2024-001"
  },
  {
    title: "DSA Mastery Certificate",
    description: "Achieved mastery in Data Structures and Algorithms through rigorous training and practice.",
    image: c3,
    issuer: "Tech Institute",
    date: "2024",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
    credentialId: "DSA-2024-002"
  },
  {
    title: "Node.js Certification",
    description: "Certified in Node.js and Express.js for backend development and API creation.",
    image: c2,
    issuer: "Node Foundation",
    date: "2023",
    skills: ["Node.js", "Express.js", "REST APIs", "Database Integration"],
    credentialId: "NODE-2023-003"
  },
  {
    title: "Cloud Computing Fundamentals",
    description: "Certified in cloud computing fundamentals and AWS services for scalable applications.",
    image: c4,
    issuer: "AWS Academy",
    date: "2023",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
    credentialId: "AWS-2023-004"
  },
];

const Certificates = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      reset: true,
    });

    sr.reveal('.certificates-title', { origin: 'top', delay: 200 });
    sr.reveal('.certificate-card', { origin: 'bottom', interval: 200, delay: 300 });
  }, []);

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="certificates-title">Certificates & Achievements</h2>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-image">
              <img src={cert.image} alt={cert.title} className="certificate-img" />
              <div className="certificate-overlay">
                <FaAward className="award-icon" />
              </div>
            </div>

            <div className="certificate-content">
              <div className="certificate-header">
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">
                    <FaCalendarAlt /> {cert.date}
                  </span>
                </div>
              </div>

              <p className="certificate-description">{cert.description}</p>

              <div className="certificate-skills">
                <div className="skills-header">
                  <FaTag className="skills-icon" />
                  <span>Skills Covered</span>
                </div>
                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="certificate-footer">
                <div className="credential-id">
                  <small>Credential ID: {cert.credentialId}</small>
                </div>
                <button className="verify-btn">
                  <FaExternalLinkAlt /> Verify Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
