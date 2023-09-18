
// Internal imports
import '../styles/Home.css';
import Headline from '../components/Headline.js';
import ContactBox from '../components/ContactBox.js';
import TagCloud from '../components/TagCloud.js';

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