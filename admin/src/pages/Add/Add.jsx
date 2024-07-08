import React from 'react';
import { assets } from '../../assets/assets'; 

const Add = () => {
  return (
    <div className='add'>
      <form className='flex flex-col'>
        <div className="add-image-upload flex flex-col">
          <p>Upload image</p>
          <label htmlFor='image'>
            <img src={assets.upload_area} alt='' />
          </label>
          <input type='file' id='image' hidden required />
        </div>
        <div className="add-product-name flex flex-col">
          <p>Product name</p> 
          <input type='text' name='productName' placeholder='Type here' />
        </div>

        <div className="add-product-description flex flex-col">
          <p>Product Features</p>
          <textarea name='description' rows='6' placeholder='Write content here' required ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex flex-col">
            <p>Product category</p>
            <select name='category'>
              <option value="Headphones">Headphones</option>
              <option value="Speakers">Speakers</option>
              <option value="Earphones">Earphones</option>
            </select>
          </div>
          <div className="add-price flex flex-col">
            <p>Product Price</p>
            <input type='number' name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-button'>Add</button>
      </form>
    </div>
  );
}

export default Add;
