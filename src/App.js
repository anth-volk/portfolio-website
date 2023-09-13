// External imports
import React from 'react';

// Internal imports
import './styles/App.css';
import Home from './pages/Home.js';
import Navigation from './pages/Navigation.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

function App() {

  return (
    <main>
      <Navigation/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>

  );
}

export default App;
