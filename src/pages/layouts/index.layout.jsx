import React from "react";
import Navbar from "./../../components/Navbar";
import Bot from "./../../components/Bot";
import Hero from "./../../components/Hero";
import About from "./../../components/About";
import Skills from "./../../components/Skills";
import Hireme from "./../../components/Hireme";
import Project from "./../../components/Project";
import Contact from "./../../components/Contact";
import Footer from "./../../components/Footer";

const indexLayout = () => {
  return (
    <>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default indexLayout;
