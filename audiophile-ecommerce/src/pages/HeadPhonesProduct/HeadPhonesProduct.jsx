import React from 'react'
import ImageData from '/data.json';
import { Link } from 'react-router-dom';
import SeeProduct from '../../Components/Button/SeeProduct';


const HeadPhonesProduct = () => {

  // Filter the data to get the item with id 4
  const filteredData = ImageData.filter((item) => item.id === 4);

  return (
    <div className='mx-6 md:mx-32' >
      <div className='mt-8' >
        <p>Go Back</p>
      </div>

      {/*Actual Product */}
      <div className='flex flex-col md:flex-row'>
        {/* XX99 Mark II Headphones */}
        {filteredData.map((data) => (
          <div className='flex flex-col justify-center items-center md:justify-normal md:flex-row border mt-8 border-red-500 ' key={data.id}>
            {/* Images */}
            <div className=''>
              <img src={data.image.mobile} className='md:hidden   rounded-md' />
              <img src={data.image.desktop} className='hidden md:flex rounded-md pr-12 ' />
            </div>
            
            {/* Description and Buttons */}
            <div className='flex flex-col justify-center items-center md:items-start'>
              <p>NEW PRODUCT</p>
              <h1 className="">{data.name}</h1>
              <p className="text-center md:text-left ">{data.description}</p>
              <Link to='/headphonesproduct' >
                <SeeProduct text='Add to Cart' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeadPhonesProduct