import React from 'react';

// Internal imports
import '../styles_components/ContactBox.css';
import Headshot from '../assets/volk-anthony-img.png';

// TO ADD: Resume link; alternatively, build a resume page?

export default function ContactBox() {
	return (
		<div className='ContactBox'>
			<img src={Headshot} alt='Headshot of Anthony Volk'/>
			<button className='App_primaryButton' type='button'>
				contact
			</button>
		</div>
	)
}