// src/pages/Home/Home.tsx
import React, { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Project from "./sections/Projects/Projects";
import { scroller } from "react-scroll";
import Footer from "../../components/Footer/footer";
import { Box } from "@mui/material";
import SectionSeparator from "../../components/SectionSeparator/SectionSeparator";

const Home = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    scroller.scrollTo(sectionRef.current?.id || "", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70, // compensa a altura da navbar
    });
  };

  return (
    <>
      {/* Adiciona um Box com padding-top igual à altura da NavBar */}
      <Box sx={{ pt: '0px' }}>
        <Hero />
        <SectionSeparator />

        <section ref={aboutRef} id="about" style={{ position: "relative", zIndex: 1 }}>
          <About />
        </section>
        <SectionSeparator />

        <section ref={skillsRef} id="skills" style={{ position: "relative", zIndex: 1 }}>
          {/* sua seção de skills */}
        </section>

        
        <section ref={projectRef} id="project" style={{ position: "relative", zIndex: 1 }}>
          <Project />
        </section>

        
        <Footer />
      </Box>
      
    </>
  );
};

export default Home;