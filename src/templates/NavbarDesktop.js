// External imports
import React, { useState } from 'react';

// Internal imports
import '../styles/Navbar.css';

export default function NavbarDesktop({links}) {

	const linkSection = links.map( (entry, index) => {
		return (
			<a href={entry.url} key={index}><li className='Navbar_link'>{entry.text}</li></a>
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