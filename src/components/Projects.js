// Internal imports
import './Projects.css';
import {projectData} from '../data.js';

export default function Projects() {

    let projectsJSX = projectData.map( (item, index) => {

        {/* Further work necessary 

        let techTagsJSX = projectData.map( (item, index) => {
            return (
                <li key={index}>{item.techTags[index]}</li>
            )
        })

        */}

        return (
            <a className="Projects_containerItem" href={item.link}>
                <div className="Projects_containerInner">
                    <div className="Projects_containerItem-inactive">
                        <img src={item.image} alt={item.name} key={index}></img>
                    </div>
                    <div className="Projects_containerItem-active" key={index}>
                        <p className="Projects_itemTitle" key={index}>{item.name}</p>
                        <p className="Projects_itemDesc" key={index}>{item.description}</p>
                        <ul className="Projects_itemTags" key={index}>
                        </ul>
                    </div>
                </div>
            </a>
        )
    });

    return (
        <section className="Projects" id="projects">
            <h1>PROJECTS</h1>
            <div className="Projects_container">
                {projectsJSX}
            </div>
        </section>
    );
}