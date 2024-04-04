import React from 'react'
import EarphonesData from '/data.json'
import SeeProduct from '../../Components/Button/SeeProduct'

const EarphoneProducts = () => {

  const Earphones = EarphonesData.filter((item)=> item.id === 1)
  return (
    <div>
      <div className=''>
        <h1 className='text-2xl text-white font-manrope py-10 font-bold '>SPEAKERS</h1>
      </div>

      <div>
        {Earphones.map((data) => (
          <div className='flex flex-col md:flex-row px-6 md:px-32' key={data.id}>
            <div>
              <img src={data.image.mobile} className=' md:hidden ' />
              <img src= {data.image.desktop} className='hidden md:flex ' />
            </div>

            <div>
              <p>NEW PRODUCT</p>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <SeeProduct text='See Product' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EarphoneProducts