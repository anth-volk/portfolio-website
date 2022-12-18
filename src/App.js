// Internal imports
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </main>

  );
}

export default App;
