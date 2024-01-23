import React, { useEffect, useState } from 'react';
import axios from 'axios';
import direction from '../assets/direction.png';
import humidity from '../assets/humidity.png';
import pressure from '../assets/pressure.png';
import wind from '../assets/wind.png';
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const Current = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);
  const API_KEY = "fd136502e52304c726be3e7ebc6f4d33";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        setWeatherData(response.data);
        // console.log(weatherData)

      } catch (error) {
        console.error('Error Fetching Data', error);
      }
    };
    const currentDate = new Date(weatherData.dt * 1000);
    const dateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Kolkata',
    };
    
    setDate(new Intl.DateTimeFormat('en-GB', dateTimeFormatOptions).format(currentDate));
    fetchData();
  }, [city]);

  return (
    <div className='container mx-auto relative'>
      {weatherData && (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <BigCard data={weatherData} city={city} date={date} />
          <div className='grid grid-cols-2 gap-4'>
            <SmallCard name="humidity" value={weatherData.main.humidity} path={humidity} />
            <SmallCard name="pressure" value={weatherData.main.pressure} path={pressure} />
            <SmallCard name="wind speed" value={weatherData.wind.speed} path={wind} />
            <SmallCard name="wind direction" value={weatherData.wind.deg} path={direction} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Current;
