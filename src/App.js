// External imports
import React, { useState, useEffect } from 'react';

// Internal imports
import './styles_pages/App.css';
import Home from './pages/Home.js';
import Navigation from './pages/Navigation.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

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

      function handleScroll(event) {
        /* If window.scrollY is greater than aboutAbsPos, 
        set isVisible to true, else set false */
        if (window.scrollY >= aboutAbsPos) {
          setIsVisible(true);
        }
        else {
          setIsVisible(false);
        }
      }

      // Add scroll event listener and then clean up
      document.addEventListener("scroll", handleScroll)
      return () => document.removeEventListener("scroll", handleScroll);

    }

    }, [isVisible, isSmallDevice, viewportWidth]);

  return (
    <main>
      <Navigation isSmallDevice={isSmallDevice}/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>

  );
}

export default App;
