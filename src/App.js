// External imports
import React, { useState, useEffect } from 'react';

// Internal imports
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Writing from './components/Writing.js';
import Contact from './components/Contact.js';

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  /* Make navbar visible only if user has scrolled past homepage,
  or display alternative navbar if using small screen */
  useEffect(() => {
    

    /* First, determine if screen is small; if so, set isVisible to universally true
    and then pass conditional variable to display small-size navbar */

    window.addEventListener("resize", (e) => {
      setViewportWidth(window.innerWidth);
    })

    if (viewportWidth <= 575) {
      setIsSmallDevice(true);
      setIsVisible(true);
    }

    else {

      setIsSmallDevice(false);

      /* Find the top of About relative to viewport,
      then add height of page to find absolute height of About */
      let aboutAbsPos = document.getElementById("about").getBoundingClientRect().top + window.scrollY;

      // Add scroll event listener
      document.addEventListener("scroll", (e) => {

        /* If window.scrollY is greater than aboutAbsPos, 
        set isVisible to true, else set false */
        if (window.scrollY >= aboutAbsPos) {
          setIsVisible(true);
        }
        else {
          setIsVisible(false);
        }
      })
    }

    }, [isVisible, isSmallDevice, viewportWidth]);

  return (
    <main>
      <Navbar visible={isVisible} smallDevice={isSmallDevice}/>
      <Home />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </main>

  );
}

export default App;
