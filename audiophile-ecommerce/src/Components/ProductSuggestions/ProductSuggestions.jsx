import React from 'react';
import OtherData from '/data.json';
import SeeProduct from '../Button/SeeProduct';

const ProductSuggestions = () => {
    // Find the item with id 4
    const product = OtherData.find(item => item.id === 4);

    if (!product) {
        return null; // Handle case where product is not found
    }

     return (
        <>
           <h1 className='text-center font-bold text-2xl '>YOU MAY ALSO LIKE</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-32 '>
                {product.others.map((data, index) => (
                    <div className='flex flex-col' key={index}>
                        <img src={data.image.desktop} alt={data.name} />
                        <p>{data.name}</p>
                        <SeeProduct text='See Product' />
                    </div>
                ))}
            </div>
        </>
    ); // Removed extra </>
};

export default ProductSuggestions;
