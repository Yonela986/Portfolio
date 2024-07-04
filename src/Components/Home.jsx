import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/me.png';
// import { Link } from "react-scroll"; 
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-dark">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 4 years of experience in web development.
            Currently doing my Systems Development at Capaciti.
          </p>
          <div>
            <ScrollLink
              to="about"
              smooth
              duration={500}
              className="btn btn-primary my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
            </ScrollLink>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            // src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
