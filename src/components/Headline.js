// External imports
import React, { useState } from 'react';

// Internal imports
import '../styles/Headline.css';

export default function Headline() {

	const [isMouseOver, setIsMouseOver] = useState(false);

	function handleMouseOver() {
		setIsMouseOver(true);
	}

	function handleMouseOut() {
		setIsMouseOver(false);
	}

	return (
		<div className='Headline'>
			<h1 className='Headline_text App_light Headline_large'>Anthony Volk.</h1>
			<div className='Headline_scrollContainer'>
				<div 
					className='Headline_scrollWrapper' 
					onMouseOver={handleMouseOver} 
					onMouseOut={handleMouseOut}
				>
					<h1 className='Headline_text App_light Headline_small'>Full-Stack Developer.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Ethical Technologist.</h1>
					<h1 className={`Headline_text Headline_small App_blue ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Culture Junkie.</h1>
					<h1 className={`Headline_text Headline_small App_yellow ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Language Learner.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Cat Lover.</h1>
				</div>
				<div 
					className='Headline_scrollWrapper' 
					onMouseOver={handleMouseOver} 
					onMouseOut={handleMouseOut}
				>
					<h1 className={`Headline_text Headline_small App_light ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Full-Stack Developer.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Ethical Technologist.</h1>
					<h1 className={`Headline_text Headline_small App_blue ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Culture Junkie.</h1>
					<h1 className={`Headline_text Headline_small App_yellow ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Language Learner.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver ? `Headline_text--hidden` : ``}`}>Cat Lover.</h1>
				</div>
			</div>
		</div>
	)
}