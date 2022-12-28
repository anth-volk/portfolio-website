// External imports
import {useState} from 'react';

// Internal imports
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
        <section className="Home" id="home">
            <div className="Home_wrapper">
                <div className="Home_wrapperLeft">
                    <h1 className="App_padding-none">ANTHONY VOLK</h1>
                    <p className={`Home_text-bracket ${isHovering? "active": ""}`}>{"{"}</p>
                    <div className="Home_text-hero" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <p><span className="Home_text-greenHover">aspiration: </span><span className="App_text-primaryColor">full-stack developer</span></p>
                        <p><span className="Home_text-greenHover">motivation: </span><span className="App_text-primaryColor">just & ethical tech</span></p>
                        <p><span className="Home_text-greenHover">status: </span><span className="App_text-primaryColor">seeking freelance & full-time</span></p>
                    </div>
                    <p className={`Home_text-bracket ${isHovering? "active": ""}`}>{"}"}</p>

                    {/* All on one line to ensure spaces after commas */}
                    <p className="App_text-primaryColor"><a href="https://www.linkedin.com/in/anthonyvolk/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>  <a href="https://github.com/anth-volk" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-github"></i>GitHub</a>  <a href="mailto:anth.volk@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i>Email</a></p>
                    <p className="App_text-primaryColor"><a href="https://codepen.io/anth-volk" target="_blank" rel="noreferrer"><i className="fa-brands fa-codepen"></i>CodePen</a>  <a href="https://codesandbox.io/u/anth-volk" target="_blank" rel="noreferrer"><i className="fa-regular fa-square"></i>CodeSandbox</a>  <a href="https://www.codewars.com/users/anth-volk" target="_blank" rel="noreferrer"><i className="fa-solid fa-fan"></i>CodeWars</a> </p>

                </div>
                <div className="Home_wrapperRight">
                    <a href="#about"><h1 className="App_cursor-pointer Home_navText">about</h1></a>
                    <a href="#projects"><h1 className="App_cursor-pointer Home_navText">projects</h1></a>
                    <a href="#writing"><h1 className="App_cursor-pointer Home_navText">writing</h1></a>
                    <a href="#contact"><h1 className="App_cursor-pointer Home_navText">contact</h1></a>
                </div>
            </div>
        </section>
    );
}