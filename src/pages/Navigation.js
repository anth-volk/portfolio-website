// External imports
import React from 'react';

// Internal imports
import { useBreakpoint } from '../hooks/hooks.js';
import { navLinks } from '../data/navLinks.js';
import NavbarDesktop from '../components/NavbarDesktop.js';
import NavbarMobile from '../components/NavbarMobile.js';

export default function Navigation() {

  const breakpoint = useBreakpoint();

	// If displayed on small device, use mobile template
	if (breakpoint === 'mobile') {
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