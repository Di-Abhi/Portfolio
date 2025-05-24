import { useEffect } from 'react';
import './About.css';
import ScrollReveal from 'scrollreveal';



const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.about-heading', { delay: 200, origin: 'top' });
    sr.reveal('.about-text', { delay: 400, origin: 'bottom' });
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


    </section>
  );
};

export default About;
