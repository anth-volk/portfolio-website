import React from 'react';

// Internal imports
import '../styles/ContactBox.css';
import Headshot from '../assets/volk-anthony-img.png';

export default function ContactBox() {
	return (
		<div className='ContactBox'>
			<img src={Headshot} alt='Headshot of Anthony Volk' className='ContactBox_image'/>
      {/*
			<a href='#contact' rel='noreferrer'>
				<button className='App_primaryButton' type='button'>
					contact
				</button>
			</a>
      */}
			<a href='mailto:anth.volk@gmail.com' rel='noreferrer' target='_blank'>
				<button className='App_primaryButton' type='button'>
					email
				</button>
			</a>
		</div>
	)
}