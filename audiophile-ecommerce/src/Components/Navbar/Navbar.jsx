import React, { useState } from 'react'
import Logo from '/logo.svg'
import cart from '/assets/shared/desktop/icon-cart.svg'
import Hamburger from 'hamburger-react'
import HeroProducts from '../HeroProducts/HeroProducts'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState("menu")

  return (
    <div className="navbar bg-black flex flex-col justify-between relative pt-4 px-4 md:px-32">
      <div className=' flex items-center justify-between pb-6'>
        {/*Hamburger menu */}
        <div className='hidden absolute '>
          <Hamburger
          onToggle={toggled => {
            setOpen(toggled); // Update isOpen state based on hamburger toggle
          }}
          color='white'
          />
          {isOpen && <HeroProducts isMobileMenuOpen={isOpen} />}
        </div>


        {/*Logo */}
        <div className=''>
          <Link to='/'>
            <img src={Logo} />
          </Link>
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