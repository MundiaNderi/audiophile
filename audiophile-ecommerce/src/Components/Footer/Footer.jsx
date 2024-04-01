import React from 'react';
import Logo from '/logo.svg';
import Twitter from '/icon-twitter.svg'
import Facebook from '/icon-facebook.svg'
import Instagram from '/icon-instagram.svg'

const Footer = () => {
  return (
    <div className=' flex flex-col bg-black mt-5 px-6 md:px-32 pb-20 '>
    <div className=' mt-5  flex flex-col md:flex-row justify-center md:justify-between items-center'>
      <div>
        <img src={Logo} className='pt-8 md:pt-0 ' />
      </div>

      {/* Navbar links */}
      <div className='text-center'>
        <ul className='text-white md:flex gap-3 font-manrope'>
          <li className='pt-3 md:pt-0' >HOME</li>
          <li className='py-3 md:py-0 '>HEADPHONES</li>
          <li className=''>SPEAKERS</li>
          <li className='py-3 md:py-0'>EARPHONES</li>
        </ul>
      </div>
    </div>
    <div className='pt-4 flex flex-col md:flex-row justify-between'>
        <div className=' w-96'>
        <p className='text-white text-center md:text-left' >
            Audiophile is an all in one stop to fulfill your audio needs.
            We're a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
        </p>

        <p className='pt-4'>
            Copyright 2021. All Rights Reserved
        </p>
        </div>
        <div className=' pt-20 flex flex-row gap-4'>
            <img src={Facebook} className='w-6 h-6' />
            <img src={Twitter} className='w-6 h-6'/>
            <img src={Instagram} className='w-6 h-6'/>
        </div>
      </div>
      <p className='text-white' >Copyright 2021. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
