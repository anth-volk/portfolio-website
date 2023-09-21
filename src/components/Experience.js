
// Internal imports
import '../styles/Experience.css';
import { experienceData } from '../data/experienceData.js';

export default function Experience() {

  const resume = constructResume(experienceData);

	return (

		<section className='Experience' id='experience'>
      <h1>Experience</h1>
      {resume}
		</section>
	);
}

function constructResume(experienceData) {

  const resume = experienceData.map((position) => {

    const company = (<h2>{position.company}</h2>);
    const title = (<p>{position.title}</p>);
    const dateRange = (<p>{position.dateRange}</p>);

    const tags = position.tags.map((tag) => {
      return (<p>{tag}</p>)
    });

    const description = position.bullets.map((bullet) => {
      return (<ul>{bullet}</ul>)
    });

    return (
      <>
        <div className="Experience_resItem_left">
          {company}
          {title}
          {dateRange}
          <div className="Experience_resItem_tagWrapper">
            {tags}
          </div>
        </div>
        <div className="Experience_resItem_right">
          {description}
        </div>
      </>
    );

  });

  return resume;


}