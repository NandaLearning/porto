import React from 'react'

const NavigateButton = () => {
  return (
    <div className=' p-5 w-full h-20 bg-gray-700 fixed bottom-0 md:hidden z-50'>
        <div className=' flex space-x-14 justify-center'>
            <button><a href='#home'><img src='house.svg'></img></a></button>
            <button><a href='#technology'><img src='tech.svg'></img></a></button>
            <button><a href='#project'><img src='projec.svg'></img></a></button>
            <button><a href='#bussines'><img src='bisnis.svg'></img></a></button>
            
            
            
        </div>
    </div>
  )
}

export default NavigateButton
