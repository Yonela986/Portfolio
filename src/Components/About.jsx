import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div name="about" id="about" className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <div className="py-5 rounded bg-dark text-light text-center">
            <div className="row mb-4">
              <div className="col-sm text-sm-end pb-3">
                <p className="text-4xl font-bold border-bottom border-primary">
                  About
                </p>
              </div>
              <div className="col-sm"></div>
            </div>
            <div className="row mb-4 px-4">
              <div className="col-sm text-sm-end text-4xl font-bold">
                <p>
                  Hi. I'm Yonela Futho, nice to meet you. Please take a look
                  around.
                </p>
              </div>
              <div className="col-sm">
                <p>
                  A software developer with experience in building responsive
                  applications using different programming languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
