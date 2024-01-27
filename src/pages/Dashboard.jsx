import React, { useEffect, useState } from 'react';
import Current from '../components/Current';
import Weekly from '../components/Weekly';

import { IoSearchCircle } from 'react-icons/io5';
import Search from '../components/Search';

const Dashboard = () => {
  const [city, setCity] = useState();

  const handleSearchChange = (searchData) => {
    console.log(searchData.value);  // Use value instead of label
    setCity(searchData.value);
  }

  return (
    <div className='bg-sky-300 min-h-screen'>
      <div className='container mx-auto px-2'>
        <Search onSearchChange={handleSearchChange} />
        {city && <Current city={city} />}
        {city && <Weekly city={city} />}
      </div>
    </div>
  );
};

export default Dashboard;
