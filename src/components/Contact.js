//Internal imports
import './Contact.css';

export default function Contact() {

    return (
        <section id="contact" className="Contact">
            <h1>CONTACT</h1>
            <div className="Contact_container">
                <p className="Contact_emphasisText">I’m currently looking for both freelance and full-time opportunities</p>
                <p className="Contact_subtleText">But feel free to drop me a line about civic tech, gov-tech, or anything else at the platforms below!</p>
                <div className="Contact_socialWrapper">
                    <a href="https://www.linkedin.com/in/anthonyvolk"><i class="fa-brands fa-linkedin" title="LinkedIn"></i></a>
                    <i class="fa-brands fa-square-github"></i>
                    <i class="fa-brands fa-codepen"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
        </section>
    );


}