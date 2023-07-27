// Internal imports
import '../styles_pages/About.css';
import Pdf from '../assets/volk-anthony-resume.pdf';
import Img from '../assets/volk-anthony-img.png';

export default function About () {
    return (
        <section className="About" id="about">
            <h1>ABOUT</h1>
            <div className="About_left">
                <p className="App_text-paragraphBlock">Hi! My name’s Anthony, and I am an aspiring <span className="App_text-callout">full-stack developer</span> and <span className="App_text-callout">software engineer</span>. I wrote my first HTML on a Windows 98 computer when I was 7 years old. Since then, I’ve been fascinated with computing and web development, exploring everything from retro operating systems to command-line programming and website design.</p>
                <p className="About_text">Now, I’m looking to use web development to <span className="App_text-callout">solve real-world problems</span>, informed by real-world context. While writing clean code is important, I have a passion for identifying and implementing the correct solution in the first place.</p>
                <p className="About_text">This is a mindset I bring to every software development task, informed by my education and experience in the international relations field, where I spent years analyzing complex <span className="App_text-callout">global political and societal challenges</span>. My ultimate career aspiration is to bring these two passions together and build software that empowers people to improve their communities and societies.</p>
                <div className="About_bottom">
                    <div className="About_skillsList">
                        <h2>Skills</h2>
                        <p>Analysis</p>
                        <p>Problem-solving</p>
                        <p>Strategy</p>
                        <p>Wireframing</p>
                        <p>Sitemapping</p>
                    </div>
                    <div className="About_skillsList">
                        <h2>Languages</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>SQL</p>
                        <p>Python</p>
                        <p>C</p>
                    </div>
                    <div className="About_skillsList">
                        <h2>Frameworks</h2>
                        <p>React</p>
                        <p>Flask</p>
                    </div>
                    <div className="About_skillsList">
                        <h2>Tools</h2>
                        <p>Command line</p>
                        <p>Figma</p>
                        <p>Git & GitHub</p>
                        <p>Inkscape</p>
                    </div>
                </div>
            </div>
            <div className="About_right">
                <img className="About_image" src={Img} alt="Anthony Volk against dark background"/>
                <a className="button" href={Pdf} target="_blank" rel="noreferrer">Résumé</a>
            </div>
        </section>
    );
}