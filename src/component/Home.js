import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="container my-8" id="home">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1
            className="display-4 fw-bold lh-2 text-body-emphasis"
            style={{
              fontFamily: "Playpen Sans",
              fontSize: "48px",
              lineHeight: "68px",
            }}
          >
            Hi, I am <br />
            Dhananjay Warade
          </h1>
          <h2>
            I am a
            <span
              style={{
                color: "red",
                fontFamily: "Playpen Sans",
                marginLeft: "10px",
              }}
            >
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={["Programmer.", "Full Stack Developer."]}
              />
            </span>
          </h2>
          <p className="lead">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a
              href="https://drive.google.com/file/d/1zlJ-G94jW7w6yL9C5jEWk-ceu-G0yaQU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Check Resume
            </a>
          </div>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0">
        </div>
      </div>
    </div>
  );
}

export default Home;
