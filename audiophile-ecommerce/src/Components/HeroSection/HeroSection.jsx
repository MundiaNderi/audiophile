import React from 'react';
import SeeProduct from '../Button/SeeProduct';
import SteinSpeaker from '/assets/shared/desktop/image-speaker-zx9.png';
import Speaker from '/image-speaker-zx7.jpg'
import Earphones from '/image-earphones-yx1.jpg'

const HeroSection = () => {
  return (
    <div className='md:mx-32 px-4 flex flex-col  gap-6'>
      <div className='bg-burntSienna flex flex-col md:flex-row items-center justify-center py-4 md:px-24 rounded-md '>
        <div className='items center' >
            <img src={SteinSpeaker} alt='stein speaker' className='h-50 w-80' />
        </div>
        <div className='text-center md:text-left md:pl-24 px-3 ' >
            <h1 className='font-manrope font-bold text-lg py-3 text-white'>ZX9 SPEAKER</h1>
            <p className='text-white font-manrope text-center md:text-left pb-3 '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <SeeProduct text='See Product ' />
        </div>
        </div>

        {/*ZX7 Speaker */}
        <div className=' bg-charcoalGray flex flex-row justify-between rounded-md relative '>
          <div className='' >
             <img src={Speaker} alt='' />
          </div>
            <div className='absolute top-4 text-left left-20 md:top-12 ' >
              <h1>ZX7 SPEAKER</h1>
              <SeeProduct text='See Product'  />
            </div>
        </div>

        {/*YXI Earphones */}
        <div className=' flex flex-col md:flex-row gap-3 justify-between ' >
          <div className='rounded-md' >
            <img src={Earphones} className='rounded-md' />
          </div>

          <div className='bg-lightGray rounded-md flex flex-col justify-center items-center px-44'>
            <h2 className='text-center'>YXI EARPHONES</h2>
            <SeeProduct text='See Product' />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
