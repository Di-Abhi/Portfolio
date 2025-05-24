import { useEffect } from 'react';
import './Projects.css';
import ScrollReveal from 'scrollreveal';
import { FaGithub, FaExternalLinkAlt, FaTag } from 'react-icons/fa';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

const ProjectSection = () => {
  const projects = [
    {
      title: "CodeSync",
      description: "CodeSync is a real-time interview platform that combines live video calling with a collaborative code editor. Built with Next.js, TypeScript, and Tailwind CSS, it allows interviewers to assign coding tasks and evaluate candidates in an interactive and seamless environment.",
      image: project1,
      githubLink: "https://github.com/Di-Abhi/codesync",
      liveLink: "https://codesync-demo.vercel.app", // Replace with actual live link
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebRTC", "Socket.io", "Node.js"],
      category: "Full Stack"
    },
    {
      title: "Mynta Automation",
      description: "Mynta Automation is a web automation tool designed to automate the process of adding products to a shopping cart on the Myntra website. It uses Selenium WebDriver to interact with the web elements, allowing users to quickly add multiple products to their cart without manual effort.",
      image: project2,
      githubLink: "https://github.com/Di-Abhi/Automation_Mynta",
      // liveLink: "", // Replace with actual live link
      technologies: ["Java"],
      category: "Automation"
    },
    {
      title: "Smart Study",
      description: "Smart Study is a comprehensive learning management system designed to enhance the educational experience. It features user authentication, course management, and interactive quizzes. Built with React, Node.js, and MongoDB, it provides a robust platform for students and educators to engage in online learning effectively.",
      image: project3,
      githubLink: "https://github.com/Di-Abhi/Smart-Study",
      liveLink: "https://smart-study-azure.vercel.app/", // Replace with actual live link
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "CSS3"],
      category: "Full Stack"
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
      <div className="projects-container">
        {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <span className="project-category">{project.category}</span>
            </div>
          </div>

          <div className="project-content">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              <div className="tech-header">
                <FaTag className="tech-icon" />
                <span>Technologies</span>
              </div>
              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-buttons">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github-btn"
              >
                <FaGithub /> Source Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn live-btn"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
