import React from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
