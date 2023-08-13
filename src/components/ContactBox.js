import React from 'react';

// Internal imports
import '../styles/ContactBox.css';
import Headshot from '../assets/volk-anthony-img.png';

// TO ADD: Resume link; alternatively, build a resume page?

export default function ContactBox() {
	return (
		<div className='ContactBox'>
			<img src={Headshot} alt='Headshot of Anthony Volk' className='ContactBox_image'/>
			<a href='#contact' rel='noreferrer'>
				<button className='App_primaryButton' type='button'>
					contact
				</button>
			</a>
		</div>
	)
}