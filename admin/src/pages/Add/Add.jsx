import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    features: '',
    price: '',
    includes: '',
    category: 'Earphones'
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // API call
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('features', data.features);
    formData.append('price', Number(data.price));
    formData.append('includes', data.includes);
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/audio/add`, formData);

      // Log the response for debugging
      console.log('Response:', response);

      if (response.status === 201) {
        setData({
          name: '',
          features: '',
          price: '',
          includes: '',
          category: 'Earphones'
        });
        setImage(false);
        toast.success(response.data.message || 'Product added successfully!');
      } else {
        toast.error('Failed to add item');
      }
    } catch (error) {
      toast.error('There was an error!');
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='add w-full mt-12 mx-2 md:mx-20 font-medium'>
      <ToastContainer /> {/* Toast container to display messages */}
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
        <div className="add-image-upload flex flex-col">
          <p className='pb-1'>Upload image</p>
          <label htmlFor='image'>
            <img className='w-32' src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </div>
        <div className="add-product-name flex flex-col w-72">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className=' border p-3'
            type='text'
            name='name'
            placeholder='Type here'
            required
          />
        </div>
        <div className="add-product-description flex flex-col w-72">
          <p>Product Features</p>
          <textarea
            onChange={onChangeHandler}
            value={data.features}
            className=' border p-3'
            name='features'
            rows='6'
            placeholder='Write content here'
            required
          />
        </div>
        <div className="add-product-description w-72 flex flex-col">
          <p>In the box</p>
          <textarea
            onChange={onChangeHandler}
            value={data.includes}
            className=' border p-3'
            name='includes'
            rows='6'
            placeholder='Write content here'
            required
          />
        </div>
        <div className="add-category-price flex gap-2">
          <div className="add-category flex flex-col">
            <p>Product category</p>
            <select
              name='category'
              value={data.category}
              onChange={onChangeHandler}
              className='w-28 p-2'
            >
              <option value="Headphones">Headphones</option>
              <option value="Speakers">Speakers</option>
              <option value="Earphones">Earphones</option>
            </select>
          </div>
          <div className="add-price flex flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className='w-28 p-2'
              type='number'
              name='price'
              placeholder='$20'
              required
            />
          </div>
        </div>
        <button
          type='submit'
          className='add-button w-28 p-2 px-4 bg-black cursor-pointer text-white'
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
