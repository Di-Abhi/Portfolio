// src/components/FloatingNav/FloatingNav.jsx
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./FloatingNav.css";

const FloatingNav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header")?.offsetHeight || 100;
      setShowNav(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`floating-nav ${showNav ? "visible" : ""}`}>
      <Link to="home" smooth={true} duration={500} className="float-link">Home</Link>
      <Link to="about" smooth={true} duration={500} className="float-link">About</Link>
      <Link to="skills" smooth={true} duration={500} className="float-link">Skills</Link>
      <Link to="projects" smooth={true} duration={500} className="float-link">Projects</Link>
      <Link to="achievements" smooth={true} duration={500} className="float-link">Coding Platform</Link>
      <Link to="certificates" smooth={true} duration={500} className="float-link">Certificates</Link>
      <Link to="contact" smooth={true} duration={500} className="float-link">Contact</Link>
    </div>
  );
};

export default FloatingNav;
