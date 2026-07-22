import React, { useState } from 'react';
import Current from '../components/Current';
import Weekly from '../components/Weekly';
import bg from '../assets/bg.jpg';
import Search from '../components/Search';

const TIME_SLOTS = [
  { label: 'Current / Real-time', value: 'current' },
  { label: '00:00 AM (Midnight)', value: '00:00:00' },
  { label: '03:00 AM', value: '03:00:00' },
  { label: '06:00 AM', value: '06:00:00' },
  { label: '09:00 AM', value: '09:00:00' },
  { label: '12:00 PM (Noon)', value: '12:00:00' },
  { label: '03:00 PM', value: '15:00:00' },
  { label: '06:00 PM', value: '18:00:00' },
  { label: '09:00 PM', value: '21:00:00' },
];

const Dashboard = () => {
  const [location, setLocation] = useState(null);
  const [selectedTime, setSelectedTime] = useState('current');
  const handleSearchChange = (searchData) => {
    setLocation(searchData);
  };

  return (
    <div className="py-5 relative min-h-screen">
      <div
        className="h-full object-cover w-full bg-cover bg-center fixed inset-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="h-full w-full bg-black opacity-50 absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-3 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <div className="w-full sm:w-2/3">
            <Search onSearchChange={handleSearchChange} />
          </div>

          {/* Time Selector Dropdown */}
          <div className="sm:w-1/3 bg-white backdrop-blur-md px-2 py-1 rounded-lg shadow-md flex items-center justify-between">
            <label htmlFor="time-select" className="text-gray-800 font-semibold  text-sm mr-2">
              Filter Time:
            </label>
            <select
              id="time-select"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-1 outline-none w-5/6 cursor-pointer"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {location && (
          <>
            <Current location={location} selectedTime={selectedTime} />
            <Weekly location={location} selectedTime={selectedTime} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;