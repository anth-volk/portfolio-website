// Internal imports
import './About.css';

export default function About () {
    return (
        <section className="About" id="about">
            <div className="About_gutter" />
            <div className="About_left">
                <h1 className="Global_text-pageHeader">ABOUT ME</h1>
                <p className="About_text">Hi! My name’s Anthony, and I am an aspiring <span className="Global_text-primaryColor Global_text-underline">full-stack developer</span> and <span className="Global_text-primaryColor Global_text-underline">software engineer</span>. I wrote my first HTML on a Windows 98 computer when I was 7 years old. Since then, I’ve been fascinated with computing and web development, exploring everything from retro operating systems to command-line programming and website design.</p>
                <p className="About_text">Now, I’m looking to use web development to <span className="Global_text-primaryColor Global_text-underline">solve real-world problems</span>, informed by real-world context. While writing clean code is important, I have a passion for identifying and implementing the correct solution in the first place.</p>
                <p className="About_text">This is a mindset I bring to every software development task, informed by my education and experience in the international relations field, where I spent years analyzing complex <span className="Global_text-primaryColor Global_text-underline">global political and societal challenges</span>. My ultimate career aspiration is to bring these two passions together and build software that empowers people to improve their communities and societies.</p>
            </div>
            <div className="About_right"></div>
            <div className="About_gutter" />
        </section>
    );
}