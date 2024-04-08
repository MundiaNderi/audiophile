import React from 'react'
import Earphones from '/image-category-thumbnail-earphones.png'
import Speakers from '/image-category-thumbnail-speakers.png'
import Headphones from '/image-category-thumbnail-headphones.png'
import arrowRight from '/icon-arrow-right.svg'
import { Link } from 'react-router-dom'


// Data for products
const productsData = [
    { name: 'Headphones', category: 'Headphones', },
    { name: 'Speakers', category: 'Speakers' },
    { name: 'Earphones', category: 'Earphones' }
];


const HeroProducts = ( {category, setCategory} ) => {
  return (
    <div className='grid grid-rows-1 md:grid-cols-3 bg-white gap-20 md:gap-4 pt-16 mt-10 pb-24 items-center px-4  md:px-32' >
        {productsData.map((data, index)=> {
            return (
                <div key={index} className=' pb-5 bg-lightGray flex flex-col justify-center items-center rounded-md' >
                     <img className='h-40 w-32 -mt-16 '
                     src={data.name === 'Headphones'
                     ? Headphones
                     : data.name === 'Speakers' 
                     ? Speakers
                     : Earphones} 
                     alt={data.name}
                     />
                    <p className='' >{data.category}</p>
                    <Link to={`/${data.category}`}>
                             <p className='flex items-center justify-center' >
                        Shop
                        <span  onClick={() => setCategory(prev => prev===data.category ? "All" : data.category)}  >
                            <img src={arrowRight} className='pl-1' />
                        </span>
                    </p>               
                    </Link>
                </div>                    
            )
        })}
    </div>
  )
}

export default HeroProducts