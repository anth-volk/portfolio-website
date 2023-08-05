import React from 'react';

// Local imports
import { tagCloudData } from '../data/tagCloudData.js';

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
	const tagCloudTagsWrapper = tagCloudData.map( (obj) => {

		// First, place all tags into a p tag
		const tagCloudTags = obj.tags.map( (tag) => {

			return (
				<p className='TagCloud_tag'>{tag}</p>
			);
		});

		// Then integrate all tags into the wrapper
		return (
			<div className='TagCloud_cloud'>
				{tagCloudTags}
			</div>
		);

	});

	return (
		<>
			{tagCloudHeaders}
			{tagCloudTagsWrapper}
		</>
	)
}