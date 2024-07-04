import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Works = () => {
  return (
    <div id='work' className='bg-dark text-light'>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h2 className='display-4 font-weight-bold'>Work</h2>
          <p className='lead'>Check out some of my most recent work</p>
        </div>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {/* Work Item */}
          <div className='col'>
            <div className='card bg-secondary text-light shadow'>
              {/* Example image */}
              {/* <img src={code} className='card-img-top' alt='...' /> */}
              <div className='card-body'>
                <h5 className='card-title'>CBT Application</h5>
                <p className='card-text'>
                  A CBT web application built with React and MongoDB
                </p>
                <div className='text-center'>
                  <a href='/' className='btn btn-outline-light mx-2'>
                    Demo
                  </a>
                  <a href='/' className='btn btn-outline-light mx-2'>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for other work items */}
          <div className='col'>
            <div className='card bg-secondary text-light shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Project Name</h5>
                <p className='card-text'>
                  Description of the project.
                </p>
                <div className='text-center'>
                  <a href='/' className='btn btn-outline-light mx-2'>
                    Demo
                  </a>
                  <a href='/' className='btn btn-outline-light mx-2'>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Add more work items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Works;
