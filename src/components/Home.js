import {useState} from 'react';

import './Home.css';

export default function Home() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="Home">
            <div className="Home_wrapper">
                <div className="Home_wrapperLeft">
                    <h1 className="Global_text-pageHeader">ANTHONY VOLK</h1>
                    <p className={`Home_text-bracket ${isHovering? "active": ""}`}>{"{"}</p>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <p><span className="Home_text-greenHover">aspiration: </span><span className="Global_text-primaryColor">full-stack developer</span></p>
                        <p><span className="Home_text-greenHover">motivation: </span><span className="Global_text-primaryColor">just & ethical tech</span></p>
                        <p><span className="Home_text-greenHover">status: </span><span className="Global_text-primaryColor">seeking freelance & full-time</span></p>
                    </div>
                    <p className={`Home_text-bracket ${isHovering? "active": ""}`}>{"}"}</p>
                    <p className="Global_text-primaryColor"><a href="https://www.linkedin.com/in/anthonyvolk/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://github.com/anth-volk" target="_blank" rel="noreferrer">GitHub</a>, <a href="https://codepen.io/anth-volk" target="_blank" rel="noreferrer">CodePen</a></p>
                </div>
                <div className="Home_wrapperRight">
                    <a className="Home_navAnchor" href="#about"><h1 className="Home_navText">about</h1></a>
                    <a className="Home_navAnchor" href="#projects"><h1 className="Home_navText">projects</h1></a>
                    <a className="Home_navAnchor" href="#writing"><h1 className="Home_navText">writing</h1></a>
                    <a className="Home_navAnchor" href="#contact"><h1 className="Home_navText">contact</h1></a>
                </div>
            </div>
        </div>
    );
}