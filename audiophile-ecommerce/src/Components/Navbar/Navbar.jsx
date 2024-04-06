import React, { useState } from 'react'
import Logo from '/logo.svg'
import cart from '/assets/shared/desktop/icon-cart.svg'
import Hamburger from 'hamburger-react'
import HeroProducts from '../HeroProducts/HeroProducts'
import './Navbar.css'
import { Link } from 'react-router-dom'
import arrowRight from '/icon-arrow-right.svg'
import Earphones from '/image-category-thumbnail-earphones.png'
import Headphones from '/image-category-thumbnail-headphones.png'
import Speakers from '/image-category-thumbnail-speakers.png'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState("menu")

  return (
    <div className="navbar bg-black flex  flex-col relative justify-between pt-4 px-4 md:px-32">
      <div className='flex flex-row items-center  justify-between pb-6'>
        {/*Hamburger menu */}
        <div className='md:hidden absolute '>
          <Hamburger
          onToggle={toggled => {
            setOpen(toggled); // Update isOpen state based on hamburger toggle
          }}
          color='white'
          />
          {isOpen && 
          <div className=' bg-white items-center gap justify-center flex-col '>
            <div className='flex flex-col bg-gray py-4 items-center bg-gray rounded-md' >
              <img src={Headphones} className='w-20 h-24 ' />
              <h1>HEADPHONES</h1>
              <p className='flex' >
                SHOP
                <img src={arrowRight} />
              </p>
            </div>

            <div className='flex flex-col items-center bg-gray my-5 rounded-md' >
              <img src={Speakers} className='w-20 h-24 ' />
              <h1>SPEAKERS</h1>
              <p className='flex' >
                SHOP
                <img src={arrowRight} />
              </p>
            </div>

            <div className='flex flex-col items-center bg-gray rounded-md' >
              <img src={Earphones} className=' w-24 h-24 ' />
              <h1>EARPHONES</h1>
                <p className='flex' >
                SHOP
                <img src={arrowRight} />
              </p>
            </div>
          </div>
          }
        </div>


        {/*Logo */}
        <div className=''>
          <img src={Logo} />
        </div>

        {/*   Navbar links  */}
        <ul className='cursor-pointer  hidden text-white md:flex gap-2' >
          <Link to='/' onClick={() => setMenu('home')} className={` tracking-wider font-manrope leading-6 ${menu === "home" ? "active" : ""}`} >HOME</Link>
          <Link to='/headphones' onClick={() => setMenu('headphones')}className={` tracking-wider leading-6 font-manrope ${menu === "headphones" ? "active" : ""}` } >HEADPHONES</Link>
          <Link to='/speakers' onClick={() => setMenu('speakers')}className={` tracking-wider leading-6 font-manrope ${menu === "speakers" ? "active" : ""}` } >SPEAKERS</Link>
          <Link to='/earphones' onClick={() => setMenu('earphones')} className={` tracking-wider leading-6 font-manrope ${ menu === "earphones" ? "active" : ""}` }>EARPHONES</Link>
        </ul>

        {/*Cart Icon */}
        <div className='flex' >
          <img  src={cart} alt="Cart Icon w-6 h-5 items-center " /> 
        </div>
      </div>

      <div className=''>
        <hr className='' />
      </div>
    </div>
  )
}

export default Navbar