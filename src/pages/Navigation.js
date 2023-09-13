// External imports
import React from 'react';

// Internal imports
import { useViewportWidth } from '../hooks/useViewportWidth.js';
import { navLinks } from '../data/navLinks.js';
import NavbarDesktop from '../components/NavbarDesktop.js';
import NavbarMobile from '../components/NavbarMobile.js';

export default function Navigation() {

  const viewportWidth = useViewportWidth();
  const breakpoint = 480;

	// If displayed on small device, use mobile template
	if (viewportWidth < breakpoint) {
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