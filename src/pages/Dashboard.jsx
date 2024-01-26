import React, { useState } from 'react';
import Current from '../components/Current';
import { IoSearchCircle } from 'react-icons/io5';
import Weekly from '../components/Weekly';

const Dashboard = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');

  const handleInputChange = (e) => {
    setTimeout(() => {
      setTemp(e.target.value);
    }, 2000);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(temp);
    // Delay execution 2 seconds
  };

  return (
    <div className='bg-sky-300 min-h-screen'>
      <div className=' container mx-auto px-2'>
        <div className='flex items-center justify-center py-4 '>
          <form onSubmit={handleSubmit} className='flex justify-center items-center'>
            <input
              placeholder='London, Hong Kong, Paris'
              className='lg:p-2 p-1 m-4 w-auto rounded-full lg:w-140 md:w-96 sm:w-96 w-48 border-4 border-white duration-500 focus:border-sky-600 outline-none text-sky-600 lg:text-xl'
              onChange={handleInputChange}
            />
            <button type="submit">
              <IoSearchCircle onClick={handleSubmit} className='fill-white hover:scale-120 duration-300 lg:text-7xl text-5xl cursor-pointer' />
            </button>
          </form>
        </div>
        {city && <Current city={city} />}
        {city && <Weekly city={city} />}
      </div>
    </div>
  );
};

export default Dashboard;
