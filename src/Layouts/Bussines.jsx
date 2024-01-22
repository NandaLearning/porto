import React from 'react'
import { Link } from 'react-router-dom'

const Bussines = () => {
  return (
    <div className=' mt-40'>
      <div className=' text-center'>
        <h1 className=' text-4xl font-bold text-white'>Wellcome To</h1>
        <h1 className='  font-bold text-white text-4xl md:text-6xl'>My <a className=' text-purple-700'>Bussiness</a></h1>
        <p className=' text-white text-xl mt-5 font-bold'>Create your <a className=' text-purple-700'>dream </a>website NOW</p>
        <div className=' justify-center items-center flex'>
           <Link to="https://butuhweb.vercel.app/"><img src='butuh.PNG' className=' w-[300px] lg:w-[600px] md:w-[800px] mt-20 rounded-lg shadow-2xl drop-shadow-xl duration-200 hover:shadow-purple-700'></img></Link>
        </div>
      </div>
    </div>
  )
}

export default Bussines
