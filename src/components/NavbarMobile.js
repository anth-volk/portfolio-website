// External imports
import React, {useState} from 'react';

// Internal imports
import '../styles/Navbar.css';

export default function NavbarMobile({navLinks}) {

	const [isDropdownSelected, setIsDropdownSelected] = useState(false);

	const handleDropdownSelected = () => {
		setIsDropdownSelected(prevState => !prevState);
	};

	const linkSection = navLinks.map( (entry, index) => {
		return (
			<a href={entry.url}>
				<li className='Navbar_link--dropdown' onClick={handleDropdownSelected}>{entry.text}</li>
			</a>
		)
	});

	return (
		<nav className="Navbar" id="navbar">
			<a href="#home">
				<p className="Navbar_logo">ANTHONY VOLK</p>
			</a>
			<button className="Navbar_button" onClick={handleDropdownSelected} aria-expanded={isDropdownSelected}>
        <i className={`fa-solid fa-plus ${isDropdownSelected && "Navbar_button--rotate"}`}></i>
			</button>
			<div className={isDropdownSelected ? "Navbar_dropdown" : "Navbar_dropdown Navbar_noDisplay"}>
				<ul>
					{linkSection}
				</ul>
				<div className="Navbar_dropdownBlur"></div>
			</div>
		</nav>
	);
}