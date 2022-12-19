// Internal imports
import './About.css';
import Pdf from '../assets/volk-anthony-resume.pdf';
import Img from '../assets/volk-anthony-img.png';

export default function About () {
    return (
        <section className="About" id="about">
            <div className="About_left">
                <h1>ABOUT</h1>
                <p className="App_text-paragraphBlock">Hi! My name’s Anthony, and I am an aspiring <span className="App_text-callout">full-stack developer</span> and <span className="App_text-callout">software engineer</span>. I wrote my first HTML on a Windows 98 computer when I was 7 years old. Since then, I’ve been fascinated with computing and web development, exploring everything from retro operating systems to command-line programming and website design.</p>
                <p className="About_text">Now, I’m looking to use web development to <span className="App_text-callout">solve real-world problems</span>, informed by real-world context. While writing clean code is important, I have a passion for identifying and implementing the correct solution in the first place.</p>
                <p className="About_text">This is a mindset I bring to every software development task, informed by my education and experience in the international relations field, where I spent years analyzing complex <span className="App_text-callout">global political and societal challenges</span>. My ultimate career aspiration is to bring these two passions together and build software that empowers people to improve their communities and societies.</p>
                <a className="button" href={Pdf} target="_blank" rel="noreferrer">Résumé</a>
            </div>
            <div className="About_right">
                <img className="About_image" src={Img} alt="Anthony Volk against dark background"/>
                <div className="About_skills">
                    <div className="About_skillsLeft">
                        <h2>Skills</h2>
                        <p>Analytical problem-solving</p>
                        <p>Wireframing</p>
                        <p>Sitemapping</p>
                        <p>Strategy</p>
                        <h2>Software Applications</h2>
                        <p>Figma</p>
                        <p>Git version control</p>
                        <p>Inkscape</p>
                        <p>Google productivity suite</p>
                        <p>Microsoft Office suite</p>
                        <p>Microsoft Teams</p>
                    </div>
                    <div className="About_skillsRight">
                        <h2>Software Languages & Platforms</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>SQL</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>C</p>
                        <h2>Natural Languages</h2>
                        <p>English (native)</p>
                        <p>Japanese (advanced)</p>
                        <p>Hungarian (elementary)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}