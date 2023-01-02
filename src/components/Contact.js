//Internal imports
import './Contact.css';

export default function Contact() {

    return (
        <section id="contact" className="Contact">
            <h1>CONTACT</h1>
            <div className="Contact_container">
                <p className="Contact_emphasisText">I’m currently looking for both freelance and full-time opportunities</p>
                <p className="Contact_subtleText">But feel free to check out my work or drop me a line about civic tech, gov-tech, or anything else at the platforms below!</p>
                <div className="Contact_socialWrapper">
                    <a href="https://www.linkedin.com/in/anthonyvolk" rel="noreferrer" target="_blank" className="App_underline"><i className="fa-brands fa-linkedin" title="LinkedIn"></i>LinkedIn</a>
                    <a href="https://www.github.com/anth-volk" rel="noreferrer" target="_blank" className="App_underline"><i className="fa-brands fa-square-github"></i>GitHub</a>
                    <a href="mailto:anth.volk@gmail.com" rel="noreferrer" target="_blank" className="App_underline"><i className="fa-solid fa-envelope"></i>Email</a>             
                </div>
                <div className="Contact_socialWrapper">
                    <a href="https://codepen.io/anth-volk" rel="noreferrer" target="_blank" className="App_underline"><i className="fa-brands fa-codepen" title="CodePen"></i>CodePen</a>
                    <a href="https://codesandbox.io/u/anth-volk" rel="noreferrer" target="_blank" className="App_underline"><i className="fa-regular fa-square"></i>CodeSandbox</a>
                </div>
            </div>
        </section>
    );


}