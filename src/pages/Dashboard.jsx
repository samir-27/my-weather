import React, { useEffect, useState } from 'react';
import Current from '../components/Current';
import Weekly from '../components/Weekly';
import bg from '../assets/bg.jpg'
import { IoSearchCircle } from 'react-icons/io5';
import Search from '../components/Search';

const Dashboard = () => {
  const [city, setCity] = useState();

  const handleSearchChange = (searchData) => {
    console.log(searchData.value);  // Use value instead of label
    setCity(searchData.value);
  }

  return (
<div className='py-5 relative' style={{ height: '100vh' }}>
  <div
    className="h-full object-cover w-full bg-cover bg-center fixed inset-0"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="h-full w-full bg-black opacity-50 absolute inset-0"></div>
  </div>
  <div className='container mx-auto px-3 relative z-10'>
    <Search onSearchChange={handleSearchChange} />
    {city && <Current city={city} />}
    {city && <Weekly city={city} />}
  </div>
</div>
  );
};

export default Dashboard;
