//Internal imports
import './ProjectCard.css';

export default function ProjectCard({obj, index}) {

    // First, extract tech tags as JSX object
    let techTagsJSX = obj.techTags.map ((tag, j) => {
        return (
            <li key={j}>{tag}</li>
        );
    });

    // Return card JSX
    return (
        <a className="Projects_containerItem" href={obj.link}>
            <div className="Projects_containerInner">
                <div className="Projects_containerItem-inactive">
                    <img src={obj.image} alt={obj.name}></img>
                </div>
                <div className="Projects_containerItem-active" >
                    <p className="Projects_itemTitle" >{obj.name}</p>
                    <p className="Projects_itemDesc" >{obj.description}</p>
                    <ul className="Projects_itemTagsList" >
                        {techTagsJSX}
                    </ul>
                </div>
            </div>
        </a>
    );

}
