// External imports
import React from 'react';

// Internal imports
import './styles/App.css';
import Home from './components/Home.js';
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import ContactBar from './components/ContactBar.js';

function App() {

  return (
    <main>
      <Navigation/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <ContactBar />
    </main>

  );
}

export default App;
