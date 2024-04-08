import React, { useState } from 'react'
import HeroProducts from '../../Components/HeroProducts/HeroProducts'
import HeroSection from '../../Components/HeroSection/HeroSection'
import AudioGear from '../../Components/AudioGear/AudioGear'
import Header from '../../Components/Header/Header'

const Home = () => {

  const [category, setCategory] = useState('All')
  return (
    <div>
        <Header />
        <HeroProducts category={category} setCategory={setCategory}/>
        <HeroSection />
        <AudioGear />
    </div>
  )
}

export default Home