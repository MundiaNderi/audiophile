import React from "react";
import AudioGear from "../../Components/AudioGear/AudioGear";
import HeroProducts from "../../Components/HeroProducts/HeroProducts";
import SpeakersCategory from "../../Components/SpeakerCategory/SpeakerCategory";



const Speakers = () => {

  return (
    <div className="">
      <SpeakersCategory />
      <HeroProducts />
       <AudioGear /> 
    </div>
  )
}

export default Speakers