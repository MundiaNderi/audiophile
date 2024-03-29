import React from 'react'
import Logo from '/Users/serahnderi/audiophile/audiophile-ecommerce/src/assets/shared/desktop/logo.svg'
import cart from '/Users/serahnderi/audiophile/audiophile-ecommerce/src/assets/shared/desktop/icon-cart.svg'

const Navbar = () => {
  return (
    <>
    <div className='navbar bg-black flex justify-between items-center py-4 px-32' >
      <img src={Logo} alt='Audiophile Logo' />
      <ul className='text-white flex gap-2 font-manrope' >
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
      <img  src={cart} alt="Cart Icon" />
    </div>
    </>
  )
}

export default Navbar