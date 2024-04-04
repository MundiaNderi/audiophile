import React from "react";
import AudioGear from "../../Components/AudioGear/AudioGear";
import HeroProducts from "../../Components/HeroProducts/HeroProducts";
import SpeakersCategory from "../../Components/SpeakerCategory/SpeakerCategory";
import ProductSuggestions from "../../Components/ProductSuggestions/ProductSuggestions"



const Speakers = () => {

  return (
    <div className="">
      <SpeakersCategory />
      <HeroProducts />
      <ProductSuggestions />
      <AudioGear /> 
    </div>
  )
}

export default Speakers