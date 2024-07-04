import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  return (
    <div id='skills' className='container-fluid bg-dark text-light py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center mb-5'>
            <h2 className='display-4 font-weight-bold'>Skills</h2>
            <p className='lead'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with:</p>
          </div>
        </div>
        <div className='row row-cols-2 row-cols-sm-4 g-4'>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>HTML</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>CSS</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>JavaScript</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>React</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>GitHub</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Node.js</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Firebase DB</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Python</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Java</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
