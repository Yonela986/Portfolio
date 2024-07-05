import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Contact() {
  return (
    <div name='contact' className='container-fluid bg-dark text-light min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            <div className='pb-4'>
              <h1 className='text-4xl font-bold border-bottom border-primary text-gray-300'>Contact</h1>
              <p className='text-gray-300 py-2'>Send me a message</p>
            </div>
            <form>
              <div className='mb-3'>
                <input className='form-control' type="text" placeholder='Name' name='name' />
              </div>
              <div className='mb-3'>
                <input className='form-control' type="email" placeholder='Email' name='email' />
              </div>
              <div className='mb-3'>
                <textarea className='form-control' name="message" rows="5" placeholder='Message'></textarea>
              </div>
              <button className='btn btn-primary btn-lg'>Let's Collaborate</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

