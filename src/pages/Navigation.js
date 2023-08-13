// External imports
import React from 'react';

// Internal imports
import NavbarDesktop from '../components/NavbarDesktop.js';
import NavbarMobile from '../components/NavbarMobile.js';
import { navLinks } from '../data/navLinks.js';

export default function Navigation({isSmallDevice}) {

	// If displayed on small device, use mobile template
	if (isSmallDevice) {
		return (
			<NavbarMobile navLinks={navLinks}/>
		)
	}

	else {
		return (
			<NavbarDesktop navLinks={navLinks} />
		)
	}

}