import React from 'react';

const CardDev = (props) => {
  return (
    <div className='relative w-80 h-72 bg-gray-700 rounded-lg mt-14 duration-200 shadow-purple-700 shadow-lg overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-gray-700 border border-white w-24 h-24 md:w-28 md:h-28 p-6 rounded-full duration-200 hover:border-purple-700'>
          <img src={props.img} alt='Icon' className='w-full h-full' />
        </div>
      </div>
      <div className='p-6  space-y-6'>
        <h1 className='text-center text-3xl text-white font-bold'>{props.title}</h1>
      </div>
    </div>
  );
};

export default CardDev;
