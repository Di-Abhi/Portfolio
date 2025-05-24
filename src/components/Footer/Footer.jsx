import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/Di-Abhi" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-rathour-a8b8b8228/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/abhishek" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="mailto:abhi993575@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Abhishek Kumar Rathour. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
