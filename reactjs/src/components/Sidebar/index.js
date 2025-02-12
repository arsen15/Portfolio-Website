import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faHome,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-bar">
      <nav>
        <a
          href="#home"
          onClick={() => scrollToSection("home")}
          className="home-link"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </a>
        <a
          href="#experience"
          onClick={() => scrollToSection("experience")}
          className="experience-link"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </a>
        <a
          href="#projects"
          onClick={() => scrollToSection("projects")}
          className="projects-link"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </a>
        <a
          href="#education"
          onClick={() => scrollToSection("education")}
          className="education-link"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </a>
        <a
          href="#contact"
          onClick={() => scrollToSection("contact")}
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/arsensh/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/arsen15">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
