import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Layouts/Home'
import Technology from '../Layouts/Technology'
import Project from '../Layouts/Project'
import Footer from '../Components/Footer'
import NavigateButton from '../Components/NavigateButton/NavigateButton'
import Bussines from '../Layouts/Bussines'

const Utama = () => {
  return (
    <div className=' h-[10000px] bg-gray-800 min-h-screen'>
        <Navbar/>
        <Home/>
        <Technology/>
        <Project/>
        <Bussines/>

        <NavigateButton/>
        
  

  
      
    </div>
  )
}

export default Utama
