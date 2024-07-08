import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between align-middle p-2 p-4%'>
      <img className='' src={assets.logo} alt="" />
      <img className=' w-10' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar