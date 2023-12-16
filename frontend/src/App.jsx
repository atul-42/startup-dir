
import React from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className=" bg-gray-100 min-h-screen">
      <ToastContainer />
      <Navbar />

      <div className="p-[7%] bg-gray-100 min-h-screen">
        <Cards />
      </div>

    </div>
  );
};

export default App;
