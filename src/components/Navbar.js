// External imports

// Internal imports
import './Navbar.css';

export default function Navbar() {
    return (
        <navbar className="Navbar" id="navbar">
            <a href="#home"><p className="Navbar_logo">ANTHONY VOLK</p></a>
            <div className="Navbar_right">
                <a href="#about"><p className="Navbar_link">about</p></a>
                <a href="#projects"><p className="Navbar_link">projects</p></a>
                <a href="#writing"><p className="Navbar_link">writing</p></a>
                <a href="#contact"><p className="Navbar_link">contact</p></a>
            </div>
        </navbar>
    );
}