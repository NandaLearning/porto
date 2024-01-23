import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavigateButton = () => {
  return (
    <div className='p-5 w-full h-20 bg-gray-700 fixed bottom-0 md:hidden z-50'>
      <div className='flex space-x-14 justify-center'>
        <Link to="home" smooth={true} duration={500} offset={-4000}><button><img src='house.svg'></img></button></Link>
        <Link to="technology" smooth={true} duration={500}><button><img src='tech.svg'></img></button></Link>
        <Link to="project" smooth={true} duration={500}><button><img src='projec.svg'></img></button></Link>
        <Link to="bussines" smooth={true} duration={500}><button><img src='bisnis.svg'></img></button></Link>
      </div>
    </div>
  );
}

export default NavigateButton;
