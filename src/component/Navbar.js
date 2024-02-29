import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#home"
            style={{ fontFamily: "Playpen Sans" }}
          >
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ fontFamily: "Playpen Sans" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <a
              className="btn btn-outline-secondary"
              type="submit"
              href="https://github.com/AniketPawase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github social-icon" /> GitHub Profile
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
