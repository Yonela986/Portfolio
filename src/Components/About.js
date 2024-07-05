import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Yonela
          <span className="text-primary">Futho</span>
        </h1>
        <div className="subheading mb-5">Software Developer - Yonela Futho</div>
        <p className="lead mb-5">
          I am experienced in building product websites, hybrid mobile
          applications and backend development. My previous experience of
          working in large product based companies as well as emerging startups
          will surely help in product development for companies at various
          stages.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/saurabhnative/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="https://github.com/saurabhnative">
            <i className="fab fa-github" />
          </a>
          <a className="social-icon" href="https://twitter.com/saurabhnative">
            <i className="fab fa-twitter" />
          </a>
         
        </div>
      </div>
    </section>
  );
}



