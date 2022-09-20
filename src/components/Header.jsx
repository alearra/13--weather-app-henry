
import React from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti';

function Header() {
  return (
    <div className='flex flex-row items-center justify-start'>
        <div className='flex flex-row font-bold ml-1 text-white'>
        <TiWeatherPartlySunny/>
            <h1>Weather App</h1>
        </div>
    </div>
  )
}

export default Header