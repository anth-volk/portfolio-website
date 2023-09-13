import React, { useEffect, useState } from 'react';

// Local imports
import { tagCloudData } from '../data/tagCloudData.js';
import { colors } from '../data/colors.js';
import '../styles/TagCloud.css';

const CONTENT = 'content';

export default function TagCloud() {

	// State to represent header to be listed as active
	const [activeHeaderIndex, setActiveHeaderIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

	function handleHeaderMouseOver(index) {
		setActiveHeaderIndex(index);
	}

  function handleResize() {
    const size = window.innerWidth;

    setWindowSize(window.innerWidth);
  }
	
	const colorKeys = Object.keys(colors);
  let tagBlockSize = windowSize > 768 
    ? `${0.0012 * windowSize + 0.5}rem`
    : `${0.0012 * windowSize + 0.65}rem`

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

	// Use the "headers" from the tag cloud data to create a row of three
	// hoverable links; this will be placed above the tag cloud section
	const tagCloudHeaders = tagCloudData.map( (obj, index) => {

		// Use the index from 'navLinks.map' to determine the index of 'colorKeys' we'll apply
		const colorSelector = index % colorKeys.length;

		return (
			<p 
				key={index} 
				onMouseOver={() => handleHeaderMouseOver(index)} 
				className={`TagCloud_header TagCloud_header--${colorKeys[colorSelector]} ${activeHeaderIndex === index ? `TagCloud_header--active` : ``}`}
			>
				{obj.header.toLowerCase()}
			</p>
		);

	});

	// Create a wrapper for each tag cloud; these will be positioned
	// absolutely and sit on top of one another
	const tagCloudContentWrapper = tagCloudData.map( (obj, index) => {

		// If the obj has a 'content' section, just return a styled
		// p out of it
		if (CONTENT in obj) {
			return (
				<p 
					key={index} 
					className={`TagCloud_block ${activeHeaderIndex !== index ? `TagCloud_block--hidden`: ``}`}
          style={{fontSize: tagBlockSize}}
				>
					{obj.content}
				</p>
			);
		}
		// Otherwise, do two steps
		else {

			// First, place individual tags into p's
			const tagCloudTags = obj.tags.map( (tag, index) => {

				// Determine tag cloud tag color
				const colorSelector = index % colorKeys.length;

				return (
					<p key={tag} className={`TagCloud_tag TagCloud_tag--${colorKeys[colorSelector]}`}>{tag}</p>
				);
			});

			// Then, place all of these into a div wrapper
			return (
				<div 
					key={index} 
					className={`TagCloud_cloud ${activeHeaderIndex !== index ? `TagCloud_cloud--hidden` : ``}`}
				>
					{tagCloudTags}
				</div>
			);

		}

	});

	return (
		<div className='TagCloud'>
			<div className='TagCloud_headers'>
				{tagCloudHeaders}
			</div>
			<div className='TagCloud_wrapper'>
				{tagCloudContentWrapper}
			</div>
		</div>
	)
}