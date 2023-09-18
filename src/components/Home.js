
// Internal imports
import '../styles/Home.css';
import Headline from '../subcomponents/Headline.js';
import ContactBox from '../subcomponents/ContactBox.js';
import TagCloud from '../subcomponents/TagCloud.js';

export default function Home() {

	return (

		<section className='Home' id='home'>
			<Headline />
			<div className='Home_bottomBox'>
				<ContactBox />
				<TagCloud />
			</div>
		</section>
	);
}