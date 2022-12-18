// Internal imports
import './About.css';
import Pdf from '../assets/volk-anthony-resume.pdf';
import Img from '../assets/volk-anthony-img.png';

export default function About () {
    return (
        <section className="About" id="about">
            <div className="About_gutter" />
            <div className="About_left">
                <h1>ABOUT ME</h1>
                <p className="App_text-paragraphBlock">Hi! My name’s Anthony, and I am an aspiring <span className="App_text-callout">full-stack developer</span> and <span className="App_text-callout">software engineer</span>. I wrote my first HTML on a Windows 98 computer when I was 7 years old. Since then, I’ve been fascinated with computing and web development, exploring everything from retro operating systems to command-line programming and website design.</p>
                <p className="About_text">Now, I’m looking to use web development to <span className="App_text-callout">solve real-world problems</span>, informed by real-world context. While writing clean code is important, I have a passion for identifying and implementing the correct solution in the first place.</p>
                <p className="About_text">This is a mindset I bring to every software development task, informed by my education and experience in the international relations field, where I spent years analyzing complex <span className="App_text-callout">global political and societal challenges</span>. My ultimate career aspiration is to bring these two passions together and build software that empowers people to improve their communities and societies.</p>
                <a className="button" href={Pdf} target="_blank" rel="noreferrer">Résumé</a>
            </div>
            <div className="About_right">
                <div className="About_imageContainer">
                    <img className="About_image" src={Img} alt="Anthony Volk against dark background"/>
                </div>
            </div>
            <div className="About_gutter" />
        </section>
    );
}