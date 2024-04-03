import React from 'react'
import AudioGear from '../../Components/AudioGear/AudioGear'
import HeroProducts from '../../Components/HeroProducts/HeroProducts'
import HeadPhonesProductCard from '../../Components/HeadPhonesProductCard/HeadPhonesProductCard'


const Headphones = () => {
  return (
    <div className=' '>
      {/*Heading */}
    <div className='bg-black' >
      <h1 className='text-white text-2xl font-manrope font-bold px-4 py-10  md:px-32 text-center ' >HEADPHONES</h1>
    </div>

    {/*Products */}
    <div>
      <HeadPhonesProductCard />
    </div>
    <HeroProducts />
    <AudioGear />
    </div>
  )
}

export default Headphones