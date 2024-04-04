import React from 'react';
import ImageData from '/data.json';
import SeeProduct from '../Button/SeeProduct';
import { Link } from 'react-router-dom';

const HeadPhonesProductCard = () => {
  // Filter the data to get the item with id 4
  const filteredData = ImageData.filter((item) => item.id === 4);

  const markOneData = ImageData.filter((item) => item.id === 3 );

  const whiteHeadphones = ImageData.filter((item) => item.id === 2 )

  return (
    <>
      <div className='flex flex-col md:flex-row px-4 md:px-32'>
        {/* XX99 Mark II Headphones */}
        {filteredData.map((data) => (
          <div className='flex flex-col justify-center items-center md:justify-normal md:flex-row mt-20' key={data.id}>
            {/* Images */}
            <div className=''>
              <img src={data.image.mobile} className='md:hidden   rounded-md' />
              <img src={data.image.desktop} className='hidden md:flex rounded-md pr-24 ' />
            </div>
            
            {/* Description and Buttons */}
            <div className='flex flex-col justify-center items-center md:items-start'>
              <p className=' text-burntSienna font-manrope py-2 ' >NEW PRODUCT</p>
              <h1 className=" font-manrope font-bold text-2xl ">{data.name}</h1>
              <p className="text-center md:text-left py-4 ">{data.description}</p>
              <Link to='/headphonesproduct' >
                <SeeProduct text='See Product' />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div>
        {/*XX99 Mark I Headphones */}
        {markOneData.map((data) => (
            <div key={data.id} className=' flex flex-col md:flex-row-reverse  mt-16 mx-4 md:mx-32 ' >
                {/*Images */}
                <div className='' >
                    <img src={data.image.mobile} className='md:hidden rounded-md' />
                    <img src={data.image.desktop} className='hidden  md:flex rounded-md pl-24 ' />
                </div>

            {/*Descriptions */}
                <div className='flex flex-col justify-center items-center md:items-start ' >
                    <h1 className='font-manrope py-4 font-bold text-2xl ' >{data.name}</h1>
                    <p className='text-center md:text-left font-manrope pb-4' >{data.description}</p>
                    <SeeProduct className='' text='See Product' />
                </div>
            </div>
        ))}
      </div>

      <div>
        {/*XX59 Headphones */}
        {whiteHeadphones.map((data) => (
            <div className='flex flex-col pb-16 justify-center items-center md:justify-normal md:flex-row mt-20 px-6 md:mx-32 '
            key={data.id} >
                {/*Images */}
                <div className=''>
                    <img src={data.image.mobile} className='md:hidden rounded-md' />
                    <img src={data.image.desktop} className='hidden md:flex rounded-md pr-24 ' />
                </div>

                {/*Descriptions */}
                <div className='flex flex-col justify-center items-center md:items-start' >
                    <h1 className='font-manrope text-2xl font-bold py-4 ' >{data.name}</h1>
                    <p className='text-center md:text-left pb-4 font-manrope ' >{data.description}</p>
                    <SeeProduct text='See Product' />
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default HeadPhonesProductCard;
