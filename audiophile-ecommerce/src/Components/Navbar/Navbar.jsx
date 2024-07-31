import React, { useState } from 'react'
import Logo from '/logo.svg'
import cart from '/assets/shared/desktop/icon-cart.svg'
import Hamburger from 'hamburger-react'
import HeroProducts from '../HeroProducts/HeroProducts'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CheckoutModal from '../Modals/CheckoutModal'

const Navbar = ({ setShowLogin }) => {

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState("menu")

  const toggleCheckoutModal = () => {
    setIsCheckoutModalOpen(!isCheckoutModalOpen)
  };

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
          <Link to='/headphones' onClick={() => setMenu('headphones')} className={` tracking-wider leading-6 font-manrope ${menu === "headphones" ? "active" : ""}`} >HEADPHONES</Link>
          <Link to='/speakers' onClick={() => setMenu('speakers')} className={` tracking-wider leading-6 font-manrope ${menu === "speakers" ? "active" : ""}`} >SPEAKERS</Link>
          <Link to='/earphones' onClick={() => setMenu('earphones')} className={` tracking-wider leading-6 font-manrope ${menu === "earphones" ? "active" : ""}`}>EARPHONES</Link>
        </ul>

        {/*Cart Icon */}
        <div className='flex relative' >
          <div className='pr-8'>
            <button onClick={() => setShowLogin(true)} className=' text-white bg-burntSienna hover:bg-mellowApricot p-2 px-3'>Sign up</button>
          </div>
          <div className="navbar-search-icon relative ">
            <img
              src={cart}
              alt="Cart Icon items-center "
              className=' w-10'
              onClick={toggleCheckoutModal}
            />
            <div className="dot absolute w-2 h-2 bg-mellowApricot rounded-sm -top-2 -right-2 "></div>
          </div>
          {/*Cart Modal */}
          {isCheckoutModalOpen && <CheckoutModal onClose={toggleCheckoutModal} />}
        </div>

      </div>

      <div className=''>
        <hr className='' />
      </div>
    </div>
  )
}

export default Navbar