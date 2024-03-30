import React from 'react'
import Headphones from '/Users/serahnderi/audiophile/audiophile-ecommerce/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import SeeProduct from '../Button/SeeProduct'

const Header = () => {
  return (
    <div className='bg-black px-32 flex items-center pt-4' >
        <div className=' text-white'>
            <p className='font-manrope' >NEW PRODUCT</p>
            <h1 className='font-manrope'>XX99 Mark II <br />Headphones</h1>
            <p className='font-manrope' >Experience natural, lifelike audio and exceptional
                build quality made for the passionate music enthusiast
            </p>
            <SeeProduct />
        </div>
        <div>
            <img src={Headphones} className='h-100' />
        </div>
    </div>
  )
}

export default Header