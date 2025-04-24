import React from "react";
import "../assets/style.css";
import homeImg from "../assets/home1.jpg"; // Make sure to add your image here
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoSkype } from "react-icons/bi";

const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <span>Software Developer</span>
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
          <a href="#" className="btn two">
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
  <a href="#"><i className="bx bxl-facebook"></i></a>
  <a href="#"><i className="bx bxl-twitter"></i></a>
  <a href="#"><i className="bx bxl-linkedin"></i></a>
  <a href="#"><i className="bx bxl-skype"></i></a>
</div>

      </div>
    </section>
  );
};

export default Home;
