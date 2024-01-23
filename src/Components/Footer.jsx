import React from 'react'

const Footer = () => {
  return (
    <div className='text-white space-y-6 bg-gray-800 w-full mt-64 h-72'>
      <h1 className=' text-2xl text-center'>Ananda Lukman Ramadhan</h1>
      <ul className=' flex justify-center space-x-8'>
        <li>Home</li>
        <li>Technology</li>
        <li>Project</li>
        <li>Bussines</li>
        <li>Contact</li>
      </ul>
      <div className=' flex justify-center items-center space-x-5 mt-4'>
        <img src='facebook.svg'></img>
        <img src='instagram.svg'></img>
        <img src='twitter.svg'></img>
      </div>
            <p className=' text-center'>Copyright 2024</p>
    </div>
  )
}

export default Footer
