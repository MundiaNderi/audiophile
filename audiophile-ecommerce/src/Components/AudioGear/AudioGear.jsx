import React from 'react';
import Person from '/image-best-gear.jpg';

const AudioGear = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-between px-4 md:mx-32 mt-10 '>
      <div className='md:ml-10'>
        <img src={Person} alt='Man wearing headphones' className='rounded-md' />
      </div>
      <div className='md:w-1/2 text-center md:text-left md:justify-center flex flex-col justify-center  pt-4 '>
        <h2 className='font-manrope text-lg font-bold'>
            BRINGING YOU THE  BEST AUDIO GEAR
        </h2>
        <p className='pt-3' >
          Located at the heart of New York City, Audiophile is the premier store
          for high-end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy your
          portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioGear;
