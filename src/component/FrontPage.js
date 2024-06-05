import Project from "../component/Project";
import Education from "./Education";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Contact from "./contact";
import Experience from './Experience';
function FrontPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Experience/>
      <Project />
      <Education />
      <Contact />
    </div>
  );
}

export default FrontPage;
