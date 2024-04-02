import React from 'react'
import HeroProducts from '../../Components/HeroProducts/HeroProducts'
import HeroSection from '../../Components/HeroSection/HeroSection'
import AudioGear from '../../Components/AudioGear/AudioGear'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroProducts />
        <HeroSection />
        <AudioGear />
    </div>
  )
}

export default Home