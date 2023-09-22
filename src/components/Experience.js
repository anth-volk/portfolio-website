
// Internal imports
import { experienceData } from '../data/experienceData.js';
import { colors } from '../data/colors.js';
import '../styles/Experience.css';

export default function Experience() {

  const resume = constructResume(experienceData);

	return (

		<section className='Experience' id='experience'>
      <h1>Experience</h1>
      <div className='Experience_resume'>
        {resume}
      </div>
		</section>
	);
}

function constructResume(experienceData) {

  const resume = experienceData.map((position, posIndex) => {

    const colorKeys = Object.keys(colors);

    const company = (
      <h2 className='Experience_resItem_company'>
        {position.company}
      </h2>
    );
    const title = (
      <p className='Experience_resItem_title'>
        {position.title}
      </p>
    );
    const dateRange = (
      <p className='Experience_resItem_dateRange'>
        {position.dateRange}
      </p>
    );

    const tags = position.tags.map((tag, tagIndex) => {
      return (
        <p 
          className={`
            Experience_resItem_tag 
            tag--${colorKeys[posIndex]}
          `}
          key={tagIndex}
          >
            {tag}
        </p>
      );
    });

    const description = position.bullets.map((bullet, bulIndex) => {
      return (
        <li 
          className='Experience_resItem_bullet'
          key={bulIndex}
          >
            {bullet}
        </li>
      );
    });

    return (
      <div className='Experience_resItem' key={posIndex}>
        {company}
        <div className="Experience_resItem_left">
          {title}
          {dateRange}
        </div>
        <div className="Experience_resItem_tagWrapper">
          {tags}
        </div>
        <ul className="Experience_resItem_right">
          {description}
        </ul>
      </div>
    );

  });

  return resume;


}