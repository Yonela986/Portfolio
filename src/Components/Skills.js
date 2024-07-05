import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills(){
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
                <h5 className='card-title'><i className="fab fa-html5" />HTML</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i className="fab fa-css3-alt" />CSS</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i className="fab fa-js-square" />JavaScript</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i className="fab fa-react" />React</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i className="fab fa-github" />GitHub</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i className="fab fa-node-js" />Node.js</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i class="fa fa-database" />Firebase DB</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i class='fab fa-python' />Python</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card bg-secondary text-light text-center shadow'>
              <div className='card-body'>
                <h5 className='card-title'><i class='fab fa-java' />Java</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


