import React from 'react'
import Logo from '/logo.svg'
import cart from '/Users/serahnderi/audiophile/audiophile-ecommerce/src/assets/shared/desktop/icon-cart.svg'
import Hamburger from 'hamburger-react'


const Navbar = () => {
  return (
    <div className="navbar bg-black flex  flex-col  justify-between pt-4 px-4 md:px-32">
      <div className='flex flex-row items-center justify-between pb-6'>
        {/*Hamburger menu */}
        <div className='md:hidden'>
          <Hamburger color='white' className='md:hidden' />
        </div>

        {/*Logo */}
        <div className='items-center'>
          <img src={Logo} />
        </div>

        {/*   Navbar links  */}
        <ul className=' hidden text-white md:flex gap-2 font-manrope' >
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>

        {/*Cart Icon */}
        <img  src={cart} alt="Cart Icon w-6 h-5 items-center " /> 
      </div>
      <div className=''>
        <hr className='' />
      </div>
    </div>
  )
}

export default Navbar