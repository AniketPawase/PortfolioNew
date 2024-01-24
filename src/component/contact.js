import React from "react";

function Contact() {
  return (
    <div className="container my-8" id="contact">
      <section id="contact">
        <h1 className="mx- text-center" style={{ fontFamily: "Open Sans", padding: '0px 0px 10px 0px', fontWeight: '600' }}>Contact</h1>
        <p className="mx- text-center" style={{ fontSize: '18px' }}>
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="mx- text-center">
          <a href="https://www.linkedin.com/in/dhananjaywarade/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x social-icon"></i></a>
          <a href="mailto:waradedhananjay2000@example.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-2x social-icon" style={{ color: 'black', marginLeft: '50px' }}></i></a>
          <a href="https://github.com/Dhananjaywarade" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x social-icon" style={{ color: 'black', marginLeft: '50px' }}></i></a>
        </div>
        <div className="container">
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-md-6 offset-md-3">
              <div className="contact-form row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={{ border: '0.1px solid #854CE6', boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px' }}>
                <h3>Email Me 🚀</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={4}
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ margin: '10px' }}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
