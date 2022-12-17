// External imports

// Internal imports
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="Navbar" id="navbar">
            <a href="#home"><p className="Navbar_logo">ANTHONY VOLK</p></a>
            <div className="Navbar_right">
                <ul className="Navbar_navList">
                    <a href="#about"><li className="Navbar_link">about</li></a>
                    <a href="#projects"><li className="Navbar_link">projects</li></a>
                    <a href="#writing"><li className="Navbar_link">writing</li></a>
                    <a href="#contact"><li className="Navbar_link">contact</li></a>
                </ul>



            </div>
        </nav>
    );
}