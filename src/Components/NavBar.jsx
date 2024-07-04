import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='home' smooth={true} duration={500}>
        <AddHomeWorkIcon />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={handleClick}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='work' smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                <FaLinkedin size={30} /> Linkedin
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                <FaGithub size={30} /> Github
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                <HiOutlineMail size={30} /> Email
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                <BsFillPersonLinesFill size={30} /> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
