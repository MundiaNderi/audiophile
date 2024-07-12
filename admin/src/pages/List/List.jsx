import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  // Store all the data from the database into one state variable
  const [list, setList] = useState([]);

  const url = 'http://localhost:4000';

  // Fetch list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/audio/list`);
      console.log(response.data);

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

  // Call the function whenever the page is loaded
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex flex-col mt-12 mx-2 md:mx-20 font-medium'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          const imageUrl = `${url}${item.image.mobile}`;
          console.log(`Image URL for item ${index}: ${imageUrl}`);
          return (
            <div key={index} className='list-table-format'>
              <img src={imageUrl} alt='Product' style={{ width: '100px', height: '100px' }} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
