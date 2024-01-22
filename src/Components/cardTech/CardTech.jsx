import React from 'react';

const CardTech = (props) => {
  // Destructuring props
  const { title, desk, image1, image2, image3, image4, image5 } = props;

  // Check if any image is available
  const imagesAvailable = image1 || image2 || image3 || image4 || image5;

  return (
    <div className={` duration-200 hover:shadow-purple-700 shadow-lg w-96 h-72 rounded-xl bg-slate-700 ${!imagesAvailable && 'hidden'}`}>
      {imagesAvailable && (
        <div className='mt-10 p-7 space-y-5 text-white'>
          <h1 className='text-2xl text-white font-bold font-sans'>{title}</h1>
          <p>{desk}</p>
          <div className='flex space-x-3'>
            {image1 && <img src={image1} className='w-14 rounded-lg' alt='Tech Image 1' />}
            {image2 && <img src={image2} className='w-14 rounded-lg' alt='Tech Image 2' />}
            {image3 && <img src={image3} className='w-14 rounded-lg' alt='Tech Image 3' />}
            {image4 && <img src={image4} className='w-14 rounded-lg border' alt='Tech Image 4' />}
            {image5 && <img src={image5} className='w-14 rounded-lg' alt='Tech Image 5' />}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTech;
