import Project from "../component/Project";
import Education from "./Education";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Contact from "./contact";
function FrontPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}

export default FrontPage;
