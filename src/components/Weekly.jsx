import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempChart from './TempChart';
import WindSpeedChart from './WindSpeedChart';
import HumidityChart from './HumidityChart';
import DayCard from './DayCard';
const Weekly = ({ city }) => {
  // console.log(city)
  const [weeklyData, setWeeklyData] = useState('');
  const API_KEY = "fd136502e52304c726be3e7ebc6f4d33";

  const indicesToMap = [1, 9, 17, 25, 33]; // Updated indices for the next five days

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}&units=metric`);
        setWeeklyData(response.data);
      } catch (error) {
        console.error('Error fetching weekly data', error);
      }
    };

    fetchWeeklyData();
  }, [city]);
  // console.log(weeklyData)
  // const currentDate = new Date(weeklyData.list[0].dt * 1000);
  // setDate(new Intl.DateTimeFormat('en-GB').format(currentDate));
  return (
    <div className=''>

      {/* <h1 className='text-white lg:text-5xl md:text-3xl sm:text-2xl text-2xl font-bold font-rale py-5'>Forcast for 5 days</h1> */}
      {weeklyData && (
        <div>

          {/* {weeklyData.list[0].dt} */}

          <div className="grid mt-3  gap-3">
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
