// Internal imports
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Writing from './components/Writing.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </main>

  );
}

export default App;
