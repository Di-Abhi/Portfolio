// src/components/Header/Header.jsx
import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">
        <span>A</span>bhishek
      </a>

      <ul className={`navbar ${menuOpen ? "show" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "skills" ? "active" : ""}`}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="achievements"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "achievements" ? "active" : ""}`}
            onClick={() => handleLinkClick("achievements")}
          >
            Coding Platform
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "certificates" ? "active" : ""}`}
            onClick={() => handleLinkClick("certificates")}
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="menu-btn" onClick={toggleMenu}>
        <span>MENU</span>
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon"></i>
      </div>
    </header>
  );
};

export default Header;
