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
              fontFamily: "fangsong",
              fontSize: "48px",
              lineHeight: "68px",
            }}
          >
            Hi, I am <br />
            Aniket Pawase
          </h1>
          <h2>
            I am a
            <span
              style={{
                color: "red",
                fontFamily: "Roboto",
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
          Hello,I am a recent graduate of the Post Graduate Diploma in Advanced Computing (PG-DAC) program at CDAC. Equipped with a strong foundation in advanced computing concepts, I bring a passion for learning and problem-solving to the table. My projects have honed my technical skills, while my exposure to industry practices has prepared me for real-world challenges. I'm eager to apply my skills and contribute to innovative projects in your organization. Thank you for considering my application.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a
              href="https://drive.google.com/file/d/1b7AFOfCkGq_weP3rKtIsMK3A2z5C1hNE/view?usp=sharing"
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
