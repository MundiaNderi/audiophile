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
          <div className='flex flex-col justify-center items-center md:justify-normal md:flex-row border mt-20 border-red-500 ' key={data.id}>
            {/* Images */}
            <div className='pr-12'>
              <img src={data.image.mobile} className='md:hidden   rounded-md' />
              <img src={data.image.desktop} className='hidden md:flex rounded-md pr-12 ' />
            </div>
            
            {/* Description and Buttons */}
            <div className='flex flex-col justify-center items-center md:items-start'>
              <p>NEW PRODUCT</p>
              <h1 className="">{data.name}</h1>
              <p className="text-center md:text-left ">{data.description}</p>
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
            <div key={data.id} className=' flex flex-col md:flex-row-reverse border border-red-500 mt-16 mx-4 md:mx-32 ' >
                {/*Images */}
                <div>
                    <img src={data.image.mobile} className='md:hidden' />
                    <img src={data.image.desktop} className='hidden  md:flex' />
                </div>

            {/*Descriptions */}
                <div className='flex flex-col justify-center items-center md:items-start ' >
                    <p>NEW PRODUCT</p>
                    <h1>{data.name}</h1>
                    <p className='text-center md:text-left' >{data.description}</p>
                    <SeeProduct text='See Product' />
                </div>
            </div>
        ))}
      </div>

      <div>
        {/*XX59 Headphones */}
        {whiteHeadphones.map((data) => (
            <div className='flex flex-col md:flex-row mt-16 mx-4 md:mx-32 '
            key={data.id} >
                {/*Images */}
                <div>
                    <img src={data.image.mobile} className='md:hidden' />
                    <img src={data.image.desktop} className='hidden md:flex' />
                </div>

                {/*Descriptions */}
                <div className='flex flex-col justify-center items-center md:items-start' >
                    <p>NEW PRODUCTS</p>
                    <h1>{data.name}</h1>
                    <p className='text-center md:text-left ' >{data.description}</p>
                    <SeeProduct text='See Product' />
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default HeadPhonesProductCard;
