// External imports
import React, { useState } from 'react';

// Internal imports
import { useBreakpoint } from '../hooks/hooks.js';
import '../styles/Headline.css';

export default function Headline() {

	const [isMouseOver, setIsMouseOver] = useState(false);
  const breakpoint = useBreakpoint();

	function handleMouseOver() {
		setIsMouseOver(true);
	}

	function handleMouseOut() {
		setIsMouseOver(false);
	}

  function handleClick() {
    setIsMouseOver(prev => !prev);
  }

	return (
		<div className='Headline'>
			<h1 className='Headline_text App_light Headline_large'>Anthony Volk.</h1>
			<div className='Headline_scrollContainer'>
				<div 
					className='Headline_scrollWrapper' 
          {...(breakpoint === 'mobile'
            ? { onClick: handleClick }
            : { 
              onMouseOver: handleMouseOver, 
              onMouseOut: handleMouseOut
            }
          )}
				>
					<h1 className='Headline_text App_light Headline_small'>Full-Stack Developer.
            <span className={`Headline_text App_light Headline_small Headline_hint Headline_hint--1 ${isMouseOver && 'Headline_text--hidden'}`}>.
            </span>
            <span className={`Headline_text App_light Headline_small Headline_hint Headline_hint--2 ${isMouseOver && 'Headline_text--hidden'}`}>.
            </span>
            <span className={`Headline_text App_light Headline_small Headline_hint Headline_hint--3 ${isMouseOver && 'Headline_text--hidden'}`}>.
            </span>
          </h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver && `Headline_text--hidden`}`}>Ethical Technologist.</h1>
					<h1 className={`Headline_text Headline_small App_blue ${!isMouseOver && `Headline_text--hidden`}`}>Culture Junkie.</h1>
					<h1 className={`Headline_text Headline_small App_yellow ${!isMouseOver && `Headline_text--hidden`}`}>Language Learner.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver && `Headline_text--hidden`}`}>Cat Lover.</h1>
				</div>
				<div 
					className='Headline_scrollWrapper' 
					onMouseOver={handleMouseOver} 
					onMouseOut={handleMouseOut}
				>
					<h1 className={`Headline_text Headline_small App_light ${!isMouseOver && `Headline_text--hidden`}`}>Full-Stack Developer.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver && `Headline_text--hidden`}`}>Ethical Technologist.</h1>
					<h1 className={`Headline_text Headline_small App_blue ${!isMouseOver && `Headline_text--hidden`}`}>Culture Junkie.</h1>
					<h1 className={`Headline_text Headline_small App_yellow ${!isMouseOver && `Headline_text--hidden`}`}>Language Learner.</h1>
					<h1 className={`Headline_text Headline_small App_red ${!isMouseOver && `Headline_text--hidden`}`}>Cat Lover.</h1>
				</div>
			</div>
		</div>
	)
}