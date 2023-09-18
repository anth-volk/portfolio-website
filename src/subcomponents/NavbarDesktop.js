// External imports
import React, { useState } from 'react';

// Internal imports
import '../styles/Navbar.css';
import { colors } from '../data/colors.js';

export default function NavbarDesktop({navLinks}) {

	// Map over the colors in the 'colors' object and return array of colors in use
	const colorKeys = Object.keys(colors);

	const linkSection = navLinks.map( (entry, index) => {
		// Use the index from 'navLinks.map' to determine the index of 'colorKeys' we'll apply
		const colorSelector = index % colorKeys.length;

		return (
			<a href={entry.url} key={index}>
				<li className={`Navbar_link Navbar_link--${colorKeys[colorSelector]}`}>
					{entry.text}
				</li>
			</a>
		)
	})

    return (
        <nav className="Navbar" id="navbar">
            <a href="#home"><p className="Navbar_logo">ANTHONY VOLK</p></a>
            <div className="Navbar_navList">
                <ul>
					{linkSection}
                </ul>
            </div>
        </nav>
    );

}