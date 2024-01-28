import React, { useState } from 'react';

const DayCard = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date(item.dt_txt);
  const dayName = daysOfWeek[d.getDay()];
  const formattedTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  return (
    <div className='bg-white rounded-xl shadow-xl cursor-pointer p-4 transition duration-300 ease-in-out transform hover:scale-103' onClick={toggleDetails}>
      <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row justify-between items-center'>
        <div className='text-xl font-semibold mb-2 lg:mb-0 flex'><p className='w-32'>{dayName}</p> {formattedTime}</div>

        <div className='flex items-center'>
          <img
            className='h-12 w-12 mr-2'
            src={require(`../assets/icons/${item.weather[0].icon}.png`)}
            alt=''
          />
          <p className='min-w-32 text-gray-600'>{item.weather[0].description}</p>
          <h1 className='ml-2 text-3xl min-w-20'>{item.main.temp}°</h1>
        </div>
      </div>

      {showDetails && (
        <div className='mt-3 p-2 lg:text-xl md:text-xl text-lg bg-sky-100 rounded-xl'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4'>
            <div className='flex items-center'>
              <span className='font-semibold sm:w-52 w-52'>Min Temperature:</span>
              <span className='ml-2'>{item.main.temp_min}°</span>
            </div>
            <div className='flex items-center'>
              <span className='font-semibold sm:w-52 w-52'>Max Temperature:</span>
              <span className='ml-2'>{item.main.temp_max}°</span>
            </div>
            <div className='flex items-center'>
              <span className='font-semibold sm:w-52 w-52'>Humidity:</span>
              <span className='ml-2'>{item.main.humidity}%</span>
            </div>
            <div className='flex items-center'>
              <span className='font-semibold sm:w-52 w-52'>Pressure:</span>
              <span className='ml-2'>{item.main.pressure} hPa</span>
            </div>
            <div className='flex items-center'>
              <span className='font-semibold sm:w-52 w-52'>Wind Speed:</span>
              <span className='ml-2'>{item.wind.speed} m/s</span>
            </div>
            <div className='flex items-center'>
              <span className='font-semibold sm:w-52 w-52'>Wind Direction:</span>
              <span className='ml-2'>{item.wind.deg}°</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DayCard;

