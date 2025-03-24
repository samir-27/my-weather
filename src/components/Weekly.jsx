import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempChart from './TempChart';
import WindSpeedChart from './WindSpeedChart';
import HumidityChart from './HumidityChart';
import DayCard from './DayCard';

const Weekly = ({ location }) => {
  const [weeklyData, setWeeklyData] = useState('');
  const API_KEY = "fd136502e52304c726be3e7ebc6f4d33";

  const indicesToMap = [1, 9, 17, 25, 33]; // Updated indices for the next five days

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
        );
        setWeeklyData(response.data);
      } catch (error) {
        console.error('Error fetching weekly data', error);
      }
    };

    if (location) {
      fetchWeeklyData();
    }
  }, [location]);

  return (
    <div className=''>
      {weeklyData && (
        <div>
          <div className="grid mt-3 gap-3">
            {weeklyData.list
              .filter((item, index) => indicesToMap.includes(index))
              .map((item, index) => (
                <DayCard key={index} item={item} />
              ))}
          </div>
          <div className='mt-5'>
            <TempChart data={weeklyData.list} />
            <div className="grid lg:grid-cols-2 grid-cols-1 py-5 gap-5">
              <div>
                <HumidityChart WeatherData={weeklyData.list} />
              </div>
              <div>
                <WindSpeedChart WeatherData={weeklyData.list} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weekly;