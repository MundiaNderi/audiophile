import React from "react";
import SpeakerData from '/data.json';
import SeeProduct from "../../Components/Button/SeeProduct";


const SpeakersCategory = () => {

  const filteredSpeaker  = SpeakerData.filter((item)=> item.id === 5 )

  const ZX9Speaker = SpeakerData.filter((item)=> item.id === 6 )
  return (
    <div className="">
      
      <div className='bg-black px-6 md:px-32 '>
        <h1 className='text-white font-manrope text-center font-bold py-10 text-2xl ' >SPEAKERS</h1>
      </div>

      {/*ZXZ SPEAKER */}
      {filteredSpeaker.map((data) => (
        <div className="flex flex-col md:flex-row mx-6 md:mx-32 mt-10  " key={data.id}>
          {/*Images */}
          <div>
            <img src={data.image.mobile } className="md:hidden rounded-md " />
            <img src={data.image.desktop} className="hidden md:flex rounded-md" />
          </div> 
          <div className="flex flex-col justify-center items-center md:items-start">
            <p>NEW PRODUCT</p>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <SeeProduct text='See Product' />
          </div>
        </div>
      ))}

      {/*ZX9 SPEAKER */}

      {ZX9Speaker.map((data) =>(
        <div className="flex flex-col md:flex-row-reverse mt-10 px-6 md:px-32" key={data.id}>
          <div>
            <img src={data.image.mobile} className=" md:hidden rounded-md "/>
            <img src={data.image.desktop} className="hidden md:flex rounded-md " />
          </div>

          <div>
            <p>NEW PRODUCT</p>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <SeeProduct  text='See Product'/>
          </div>
        </div>
      ) )}
    </div>
  )
}

export default SpeakersCategory