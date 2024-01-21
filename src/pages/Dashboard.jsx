import React, { useState } from 'react';
import Current from '../components/Current';
import { IoSearchCircle } from 'react-icons/io5';
import Home from './Home';

const Dashboard = () => {
  const [city, setCity] = useState('');
  const [temp,setTemp] = useState('');
  const handleInputChange = (e) => {
    setTemp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(temp);
    console.log('Submitted city:', city);
  };
  return (
    <div className='bg-sky-200 h-screen'>
      <div className='flex items-center container mx-auto py-4'>
        <h1 className='text-4xl mx-4 font-rale text-white font-bold'>Weather App</h1>
        <form onSubmit={handleSubmit} className='flex justify-center items-center'>
          <input
            placeholder='London, Hong Kong, Paris'
            className='p-2 m-4 w-140 rounded-full border-4 border-white duration-500 focus:border-sky-600 outline-none text-sky-600 text-3xl'
            onChange={handleInputChange}
          />
          <button type="submit">
            <IoSearchCircle className='fill-white hover:scale-120 duration-300 text-7xl cursor-pointer' />
          </button>
        </form>
      </div>
      {city && <Current city={city} />}
    </div>
  );
};

export default Dashboard;

