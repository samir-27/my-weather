import React, { useEffect, useState } from 'react';
import axios from 'axios';
import direction from '../assets/direction.png';
import humidity from '../assets/humidity.png';
import pressure from '../assets/pressure.png';
import wind from '../assets/wind.png';
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const Current = ({ location, selectedTime }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);
  const API_KEY = 'fd136502e52304c726be3e7ebc6f4d33';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTime === 'current') {
          // Fetch live real-time weather
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
          );
          setWeatherData(response.data);
        } else {
          // Fetch forecast and pick today's entry matching selected time
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
          );
          
          const matchingSlot = response.data.list.find((item) =>
            item.dt_txt.includes(selectedTime)
          );

          if (matchingSlot) {
            // Reformat forecast data to fit BigCard / SmallCard structure
            setWeatherData({
              ...matchingSlot,
              name: response.data.city.name,
            });
          }
        }
      } catch (error) {
        console.error('Error Fetching Weather Data', error);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location, selectedTime]);

  useEffect(() => {
    if (weatherData) {
      const currentDate = weatherData.dt_txt
        ? new Date(weatherData.dt_txt)
        : new Date(weatherData.dt * 1000);

      const dateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Asia/Kolkata',
      };
      setDate(new Intl.DateTimeFormat('en-GB', dateTimeFormatOptions).format(currentDate));
    }
  }, [weatherData]);

  return (
    <div className="relative my-4">
      {weatherData && (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <BigCard data={weatherData} location={location} date={date} />
          <div className="grid grid-cols-2 gap-4">
            <SmallCard name="humidity" value={weatherData.main.humidity + '%'} path={humidity} />
            <SmallCard name="pressure" value={weatherData.main.pressure + ' hPa'} path={pressure} />
            <SmallCard name="wind speed" value={weatherData.wind.speed + ' m/s'} path={wind} />
            <SmallCard name="wind direction" value={weatherData.wind.deg + ' deg'} path={direction} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Current;