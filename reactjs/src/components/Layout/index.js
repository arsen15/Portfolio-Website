import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import Home from "../Home";
import Experience from "../Experience";
import Projects from "../Projects";
import Education from "../Education";
import Contact from "../Contact";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className="sections">
          <section id="home" className="section home">
            <Home />
          </section>
          <section id="experience" className="section experience">
            <Experience />
          </section>
          <section id="projects" className="section projects">
            <Projects />
          </section>
          <section id="education" className="section education">
            <Education />
          </section>
          <section id="contact" className="section contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Layout;
