import React, { useState } from 'react';
import CardsProject from '../Components/cardProject/CardsProject';
import CardAnyProject from '../Components/cardProject/CardAnyProject';
import SideAnyProject from '../Components/cardProject/SideAnyProject';

const Project = () => {
  const [side, setSide] = useState(false);

  const Muncul = (e) => {
    setSide(!side);
  };

  return (
    <div className='mt-10 p-4 mx-4 md:mx-10'>
      <div className='grid md:flex md:items-center'>
        <h1 className='text-white text-4xl md:text-6xl font-bold font-sans'>
          Project that I<br />
          have been <a className='text-purple-700'>done</a>
        </h1>
        <img src='scribble.png' className='w-32 mx-auto md:mx-0'></img>
      </div>

      <div className='p-10 grid lg:flex justify-between'>
        <img
          src='myquran.PNG'
          className='rounded-lg shadow-purple-700 shadow-xl w-full md:w-[480px] lg:w-[500px] mx-auto'
          alt='Project Screenshot'
        ></img>
        <div className='text-white mt-7 md:mt-0'>
          <p className='text-lg'>Web Developer</p>
          <h1 className='text-2xl md:text-4xl font-bold'>myQuran Project & PWA</h1>
          <p className='text-sm md:text-lg mt-5'>
            smasalsaspaldsjdskdoksdksdlp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
