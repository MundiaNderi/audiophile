import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css'



const List = ({ url }) => {
  // Store all the data from the database into one state variable
  const [list, setList] = useState([]);


  // Fetch list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/audio/list`);

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error');
      }
    } catch (error) {
      console.error('There was an error fetching the list!', error);
      toast.error('Error fetching the list');
    }
  };

  const removeFood = async (foodId) => {
    //console.log(foodId);

    const response = await axios.delete(`${url}/api/audio/remove`, { data: { id: foodId } });

    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error('Error')
    }
  }

  // Call the function whenever the page is loaded
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex flex-col mt-12 mx-2 md:mx-20 font-medium'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          const imageUrl = `${url}${item.image.mobile}`;
          //console.log(`Image URL for item ${index}: ${imageUrl}`);
          return (
            <div key={index} className='list-table-format'>
              <img src={imageUrl} alt='Product' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className=' cursor-pointer'>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
