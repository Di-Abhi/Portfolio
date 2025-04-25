import React, { useEffect } from 'react';
import './Projects.css';
import ScrollReveal from 'scrollreveal';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

const ProjectSection = () => {
  const projects = [
    {
      title: "CodeSync",
      description: "CodeSync is a real-time interview platform that combines live video calling with a collaborative code editor. Built with Next.js, TypeScript, and Tailwind CSS, it allows interviewers to assign coding tasks and evaluate candidates in an interactive and seamless environment. ",
      image: project1,
      link: "https://github.com/Di-Abhi/codesync",
    },
    {
      title: "ShopEase",
      description: "ShopEase is a modern e-commerce website built for a smooth shopping experience. Developed using React and Tailwind CSS, it features product listings, a dynamic cart system, and responsive design. The site allows users to browse, add items to cart, and checkout with ease, offering a clean and user-friendly interface.",
      image: project2,
      link: "#",
    },
    {
      title: "BeEvent",
      description: "BeEvent is an easy-to-use event management platform that simplifies the process of creating, organizing, and managing events. It helps users efficiently handle invitations, guest lists, and schedules for a smooth event experience.",
      image: project3,
      link: "#",
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.projects-title', { origin: 'top', delay: 200 });
    sr.reveal('.project-image', { origin: 'left', interval: 300 });
    sr.reveal('.project-description', { origin: 'right', interval: 300 });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-item ${index % 2 === 0 ? "reverse" : ""}`}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn">View Project</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
