import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
        <h2>Thanks for taking a look! Let's connect :)</h2>
        <section id="links">
            <div id="contact">
                <h3>Contact:</h3>
                <p className="footer-links"><a href= "mailto:riana.san808@gmail.com">riana.san808@gmail.com</a> | <a href="https://www.linkedin.com/in/riana-santos/">LinkedIn</a></p>
            </div>
            <div id="hiring">
                <h3>Hiring?</h3>
                <p className="footer-links"><a href="https://drive.google.com/file/d/1xB7PxCUvQ7tgiEm-xKZjFdLgti1t_6J3/view?usp=sharing">Resume</a> | <Link to="/projects">Projects</Link></p>
            </div>
        </section>
    </footer>
  );
}