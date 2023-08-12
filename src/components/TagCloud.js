import React from 'react';

// Local imports
import { tagCloudData } from '../data/tagCloudData.js';

const CONTENT = 'content';

export default function TagCloud() {

	// Use the "headers" from the tag cloud data to create a row of three
	// hoverable links; this will be placed above the tag cloud section
	const tagCloudHeaders = tagCloudData.map( (obj) => {

		return (
			<p className='TagCloud_header'>{obj.header.toLowerCase()}</p>
		);

	});

	// Create a wrapper for each tag cloud; these will be positioned
	// absolutely and sit on top of one another
	const tagCloudContentWrapper = tagCloudData.map( (obj) => {

		// If the obj has a 'content' section, just return a styled
		// p out of it
		if (CONTENT in obj) {
			return (
				<p className='TagCloud_block'>{obj.content}</p>
			);
		}
		// Otherwise, do two steps
		else {
			// First, place individual tags into p's
			const tagCloudTags = obj.tags.map( (tag) => {
				return (
					<p className='TagCloud_tag'>{tag}</p>
				);
			});

			// Then, place all of these into a div wrapper
			return (
				<div className='TagCloud_cloud'>
					{tagCloudTags}
				</div>
			);

		}

	});

	return (
		<>
			{tagCloudHeaders}
			{tagCloudContentWrapper}
		</>
	)
}