import React, { useEffect, useState } from 'react';
import Current from '../components/Current';
import Weekly from '../components/Weekly';
import bg from '../assets/bg.jpg';
import { IoSearchCircle } from 'react-icons/io5';
import Search from '../components/Search';

const Dashboard = () => {
  const [location, setLocation] = useState(null); // Store latitude and longitude

  const handleSearchChange = (searchData) => {
    console.log(searchData); // Log the latitude and longitude
    setLocation(searchData); // Set the latitude and longitude
  };

  return (
    <div className="py-5 relative" style={{ height: '100vh' }}>
      <div
        className="h-full object-cover w-full bg-cover bg-center fixed inset-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="h-full w-full bg-black opacity-50 absolute inset-0"></div>
      </div>
      <div className="container mx-auto px-3 relative z-10">
        <Search onSearchChange={handleSearchChange} />
        {location && <Current location={location} />} {/* Pass location instead of city */}
        {location && <Weekly location={location} />} {/* Pass location instead of city */}
      </div>
    </div>
  );
};

export default Dashboard;
