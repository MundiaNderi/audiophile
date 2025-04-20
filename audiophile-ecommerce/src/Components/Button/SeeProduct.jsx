import React, { Children } from 'react'

const SeeProduct = ( { text, onClick}) => {
  return (
    <button onClick={onClick} className='text-white font-manrope bg-burntSienna hover:bg-mellowApricot p-2 px-4'  >{text}</button>
  )
}

export default SeeProduct