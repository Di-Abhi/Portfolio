import { useEffect } from 'react';
import './Skills.css';
import ScrollReveal from 'scrollreveal';

// Frontend Skills Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiSass } from 'react-icons/si';

// Backend Skills Icons
import { FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiPostgresql, SiRedis, SiFirebase } from 'react-icons/si';

// Programming Languages Icons
import { FaJava, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiC, SiJavascript } from 'react-icons/si';

// Tools & Others
import { FaGitAlt, FaGithub, FaDocker, FaCode } from 'react-icons/fa';
import { SiPostman, SiVercel } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Vue.js', icon: <FaVuejs />, color: '#4FC08D' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'Sass', icon: <SiSass />, color: '#CC6699' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'REST APIs', icon: <FaServer />, color: '#FF6B6B' }
  ];

  const programmingLanguages = [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'C', icon: <SiC />, color: '#A8B9CC' }
  ];

  const tools = [
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' }
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      reset: true,
    });

    sr.reveal('.skills-title', { delay: 200, origin: 'top' });
    sr.reveal('.skills-category', { delay: 300, interval: 200, origin: 'bottom' });
    sr.reveal('.skill-item', { delay: 400, interval: 100, origin: 'bottom' });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">🎨</span>
            Frontend Development
          </h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-item" style={{ '--skill-color': skill.color }}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">⚙️</span>
            Backend Development
          </h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-item" style={{ '--skill-color': skill.color }}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">💻</span>
            Programming Languages
          </h3>
          <div className="skills-grid">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-item" style={{ '--skill-color': skill.color }}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">🛠️</span>
            Tools & Technologies
          </h3>
          <div className="skills-grid">
            {tools.map((skill, index) => (
              <div key={index} className="skill-item" style={{ '--skill-color': skill.color }}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
