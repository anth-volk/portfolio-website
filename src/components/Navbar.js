// External imports
import React, { useState } from 'react';

// Internal imports
import './Navbar.css';

export default function Navbar(props) {

    // Used only if smallDevice = true
    const [isDropdownSelected, setIsDropdownSelected] = useState(false);

    if (props.smallDevice) {

        const handleDropdownSelected = () => {
            setIsDropdownSelected(!isDropdownSelected);
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
                        <a href="#projects">
                            <li className="Navbar_link--dropdown" onClick={handleDropdownSelected}>projects</li>
                        </a>
                        <a href="#writing">
                            <li className="Navbar_link--dropdown" onClick={handleDropdownSelected}>writing</li>
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
            <nav className={props.visible ? "Navbar visible" : "Navbar hidden"} id="navbar">
                <a href="#home"><p className="Navbar_logo">ANTHONY VOLK</p></a>
                <div className="Navbar_navList">
                    <ul>
                        <a href="#about"><li className="Navbar_link">about</li></a>
                        <a href="#projects"><li className="Navbar_link">projects</li></a>
                        <a href="#writing"><li className="Navbar_link">writing</li></a>
                        <a href="#contact"><li className="Navbar_link">contact</li></a>
                    </ul>



                </div>
            </nav>
        );

    }
}