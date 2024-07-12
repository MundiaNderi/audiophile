import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Add from './pages/Add/Add.jsx';
import Orders from './pages/Orders/Orders.jsx';
import List from './pages/List/List.jsx';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
      <div className=''>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
