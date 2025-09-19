import {useEffect } from 'react'

import AOS from 'aos';// for onScroll Appear
import 'aos/dist/aos.css'; 

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar_component from './components/Navbar_component'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from "./components/Skills";
import Project from "./components/Project";
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Certificates from './components/Certificates'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once
      offset: 100,    // trigger when 100px from viewport
    });
  }, []);
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar_component />
            <Home />
            <AboutMe />
            <Skills />
            <Project />
            <ContactMe />
            <Footer />
          </>
        } />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      
    </Router>
  );
}

export default App;
