// External imports
import React from 'react';

// Internal imports
import NavbarDesktop from '../templates/NavbarDesktop.js';
import NavbarMobile from '../templates/NavbarMobile.js';

export default function Navigation({isSmallDevice}) {

	const LINKS = [
		{
			text: 'about',
			url: '#about'
		},
		{
			text: 'work',
			url: '#work'
		},
		{
			text: 'contact',
			url: '#contact'
		}
	];

	// If displayed on small device, use mobile template
	if (isSmallDevice) {
		return (
			<NavbarMobile links={LINKS}/>
		)
	}

	else {
		return (
			<NavbarDesktop links={LINKS} />
		)
	}

}