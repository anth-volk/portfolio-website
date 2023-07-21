// External imports
import React, { useState } from 'react';

// Internal imports
import '../styles/Navbar.css';

export default function Navbar(props) {

    // Used only if smallDevice = true
    const [isDropdownSelected, setIsDropdownSelected] = useState(false);

    if (props.smallDevice) {

        const handleDropdownSelected = () => {
            setIsDropdownSelected(prevState => !prevState);
        };

        return (
            <nav className="Navbar" id="navbar">
                <a href="#home">
                    <p className="Navbar_logo">ANTHONY VOLK</p>
                </a>
                <button className="Navbar_button" onClick={handleDropdownSelected} aria-expanded={isDropdownSelected}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className={isDropdownSelected ? "Navbar_dropdown" : "Navbar_dropdown Navbar_noDisplay"}>
                    <ul>
                        <a href="#about">
                            <li className="Navbar_link--dropdown" onClick={handleDropdownSelected}>about</li>
                        </a>
                        <a href="#work">
                            <li className="Navbar_link--dropdown" onClick={handleDropdownSelected}>work</li>
                        </a>
                        <a href="#contact">
                            <li className="Navbar_link--dropdown" onClick={handleDropdownSelected}>contact</li>
                        </a>
                    </ul>
                    <div className="Navbar_dropdownBlur"></div>
                </div>
            </nav>
        );
    }

    else {

        return (
            <nav className="Navbar" id="navbar">
                <a href="#home"><p className="Navbar_logo">ANTHONY VOLK</p></a>
                <div className="Navbar_navList">
                    <ul>
                        <a href="#about"><li className="Navbar_link">about</li></a>
                        <a href="#work"><li className="Navbar_link">work</li></a>
                        <a href="#contact"><li className="Navbar_link">contact</li></a>
                    </ul>
                </div>
            </nav>
        );

    }
}