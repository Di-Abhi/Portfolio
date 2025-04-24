import React, { useEffect } from 'react';
import './About.css';
import ScrollReveal from 'scrollreveal';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiMongodb, SiCplusplus, SiTailwindcss } from 'react-icons/si';

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.about-heading', { delay: 200, origin: 'top' });
    sr.reveal('.about-text', { delay: 400, origin: 'bottom' });
    sr.reveal('.skills', { delay: 600, origin: 'bottom' });
    sr.reveal('.skill', { interval: 100, origin: 'bottom' });
  }, []);

  return (
    <section id="about" className="about">
      <h2 className="about-heading">About Me</h2>
      <p className="about-text">
        Hello! I'm Abhishek Kumar Rathour, a passionate software developer with a strong foundation in frontend and backend technologies. 
        I love building visually appealing, high-performing, and user-friendly web applications. 
        My journey in tech started with curiosity and has now become a continuous learning adventure.
      </p>
      <p className="about-text">
        Apart from coding, I enjoy learning new tools, exploring open-source contributions, and improving my skills to become a better engineer every day.
      </p>

      <h3 className="skills-heading">Skills</h3>
      <div className="skills">
        <div className="skill"><FaHtml5 /><span>HTML5</span></div>
        <div className="skill"><FaCss3Alt /><span>CSS3</span></div>
        <div className="skill"><FaJs /><span>JavaScript</span></div>
        <div className="skill"><FaReact /><span>React</span></div>
        <div className="skill"><FaNodeJs /><span>Node.js</span></div>
        <div className="skill"><SiMongodb /><span>MongoDB</span></div>
        <div className="skill"><FaJava /><span>Java</span></div>
        <div className="skill"><SiCplusplus /><span>C++</span></div>
        <div className="skill"><FaPython /><span>Python</span></div>
        <div className="skill"><SiTailwindcss /><span>Tailwind</span></div>
        <div className="skill"><FaGitAlt /><span>Git</span></div>
        <div className="skill"><FaGithub /><span>GitHub</span></div>
      </div>
    </section>
  );
};

export default About;
