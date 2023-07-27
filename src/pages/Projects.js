// Internal imports
import '../styles_pages/Projects.css';
import {projectData} from '../data.js';
import ProjectCard from './ProjectCard.js';

export default function Projects() {

    // Generate project cards
    const projectCardsJSX = projectData.map( (item, index) => {
        return (
            <ProjectCard obj={item} index={index} key={index}/>
        )});
    

    
    return (
        <section className="Projects" id="projects">
            <h1>PROJECTS</h1>
            <div className="Projects_container">
                {projectCardsJSX}
            </div>
        </section>
    );
}