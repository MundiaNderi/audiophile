import React from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar  pt-12 w-28  md:w-56 min-h-screen border border-gray-300 border-t-0 text-base sm:text-sm '>
      <div className="options ml-10  flex flex-col gap-5">
        <NavLink to='/add' className="sidebar-option cursor-pointer  flex items-center gap-2  border px-2 py-2 rounded-l-md ">
          <img src={assets.add_icon} alt="" />
          <p className=' font-manrope font-medium'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option  cursor-pointer flex gap-2 items-center border  px-2 py-2 rounded-l-md ">
          <img src={assets.order_icon} alt="" />
          <p className=' font-manrope font-medium'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className=" sidebar-option cursor-pointer flex gap-2 items-center border px-2 py-2 rounded-l-md ">
          <img src={assets.order_icon} alt="" />
          <p className=' font-manrope font-medium'>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar