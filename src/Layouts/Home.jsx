import React from 'react';
import { Link } from 'react-router-dom';
import CardDev from '../Components/cardDev/CardDev';

const Home = () => {
  return (
    <div className='p-6 mt-10 ' id='home'>
      <h1 className='text-white font-bold text-2xl font-sans md:text-4xl'>
        Welcome to the world of digital creativity!<br />I am{' '}
        <Link to='/' className='text-purple-700 font-bold'>
          Ananda Lukman Ramadhan,
        </Link>
        <br />a dedicated Fullstack Web Developer.
      </h1>

      <div className='grid justify-center mt-16 gap-10 md:grid-cols-2'>
        <div className='flex items-center justify-center'>
          <img
            src='profile.png'
            className=' rounded-lg border border-purple-700 md:h-96 md:w-64 h-96 w-64 hover:shadow-purple-700 shadow-lg duration-200'
            alt='Profile'
          />
        </div>

        <div>
          <h1 className='font-bold md:mt-0 mt-10 text-2xl text-white md:mb-4'>Biography</h1>
          <p className='text-white text-xl mt-4'>
            Ananda Lukman Ramadhan is a skilled Fullstack Web Developer with a year-long journey in the world of programming. His dedication to mastering the art of web development has been evident throughout his learning journey.
          </p>

          <div className='mt-7'>
            <h1 className='font-bold text-2xl text-white'>Let's Connect:</h1>
            <div className='flex mt-4 space-x-5'>
              <img src='facebook.svg' alt='Facebook' />
              <img src='instagram.svg' alt='Instagram' />
              <img src='twitter.svg' alt='Twitter' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        <h1 className='text-3xl font-bold text-white'>What I Do</h1>
        <p className='text-xl font-sans text-white mt-4'>
          I am not only a Fullstack Web Developer but also have been learning various other skills such as app development, UI/UX, and DevOps.
        </p>
        <div className='flex justify-center flex-wrap mt-4 md:space-x-10'>
          <CardDev img='app.svg' title='App Developer' />
          <CardDev img='copy.svg' title='UI/UX' />
          <CardDev img='devops.svg' title='DevOps' />
        </div>
      </div>
    </div>
  );
};

export default Home;
