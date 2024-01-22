import React from 'react'

const NavigateButton = () => {
  return (
    <div className=' p-5 w-full h-20 bg-gray-700 fixed bottom-0 md:hidden z-50'>
        <div className=' flex space-x-14 justify-center'>
            <img src='house.svg'></img>
            <img src='tech.svg'></img>
            <img src='projec.svg'></img>
            <img src='bisnis.svg'></img>
        </div>
    </div>
  )
}

export default NavigateButton
