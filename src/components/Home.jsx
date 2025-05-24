import "../assets/style.css";
import homeImg from "../assets/home1.jpg"; // Make sure to add your image here

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <span>Full Stack Web Developer</span>
        <h1>Abhishek Kumar Rathour</h1>
        <p>
          Passionate about technology and armed with a versatile skill set
          encompassing HTML, CSS, JavaScript, Java, and C++, I am an aspiring
          software developer dedicated to crafting innovative solutions and
          embracing continuous learning in the ever-evolving world of
          programming.
        </p>
        <div className="main-btn">
          <a
            href="https://drive.google.com/file/d/1cQ-dr-e9tjDOC84PrTC9Qu1MIwtO6sZ2/view?usp=drive_link"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a href="#contact" className="btn two">
            Hire Me Now
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={homeImg} alt="Abhishek" />
      </div>

      <div className="share">
        <p>Check out my:</p>
        <div className="social">
          <a href="https://github.com/Di-Abhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-rathour-a8b8b8228/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/Abhi-Rathour/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
            <i className="bx bx-code-alt"></i>
          </a>
          <a href="mailto:abhi993575@gmail.com" aria-label="Email Contact">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
