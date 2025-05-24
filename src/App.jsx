import { useEffect } from "react";
import Home from "./components/Home";
import "./assets/style.css";
import ScrollReveal from "scrollreveal";
import "boxicons/css/boxicons.min.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import FloatingNav from "./components/FloatingNav/FloatingNav";
import Certificates from "./components/Certificates/Certificates";
import ChatWidget from "./components/ChatWidget/ChatWidget";


function App() {
  useEffect(() => {
    // Menu toggle
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };

    // ScrollReveal Animations
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".logo", { delay: 200, origin: "left" });
    sr.reveal(".navbar", { delay: 400, origin: "top" });
    sr.reveal(".menu-btn", { delay: 500, origin: "right" });
    sr.reveal(".home-text span", { delay: 600, origin: "top" });
    sr.reveal(".home-text h1", { delay: 680, origin: "left" });
    sr.reveal(".home-text p", { delay: 750, origin: "right" });
    sr.reveal(".main-btn", { delay: 860, origin: "left" });
    sr.reveal(".share", { delay: 950, origin: "bottom" });
    sr.reveal(".home-img", { delay: 1000, origin: "right" });
    sr.reveal('.about h2', { delay: 200, origin: 'top' });
    sr.reveal('.about-icons', { delay: 400, origin: 'bottom' });


    return () => {
      // Clean-up if needed later
    };
  }, []);

  return (
    <>
      <FloatingNav/>
      <Header />
      <Home />
      <ChatWidget/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
