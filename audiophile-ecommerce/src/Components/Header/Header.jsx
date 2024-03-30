import React from 'react'
import SeeProduct from '../Button/SeeProduct'
import imageHero from '/src/assets/home/desktop/image-hero.jpg';

import './Header.css'
const Header = () => {
  return (
    <div className='header bg-black px-4 md:px-32 flex justify-between items-center pt-4 pb-8' >
        <div className=' text-white justify-center items-center pr-8'>
            <p className='font-manrope pb-3 font-thin tracking-widest text-sm' >NEW PRODUCT</p>
            <h1 className='font-manrope pb-3 text-3xl  '>XX99 Mark II <br />Headphones</h1>
            <p className='font-manrope pb-3 text-md ' >Experience natural, lifelike audio and exceptional
                build quality made for the passionate music enthusiast
            </p>
            <SeeProduct />
        </div>
        <div className='' >
          <img src={imageHero} className='h-full object-cover bg-transparent' alt="headphone" id='image-hero'/>
        </div>
    </div>
  )
}

export default Header