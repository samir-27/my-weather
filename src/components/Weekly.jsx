import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weekly = ({ city }) => {
  const [weeklyData, setWeeklyData] = useState('');
  const [date, setDate] = useState('')
  const API_KEY = "fd136502e52304c726be3e7ebc6f4d33";

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${'surat'}&units=metric`);
        setWeeklyData(response.data);
      } catch (error) {
        console.error('Error fetching weekly data', error);
      }
    }

    fetchWeeklyData();
  }, [city]);
  const indicesToMap = [0, 6, 14, 22, 30, 38];
  // console.log(weeklyData);

  // const currentDate = new Date(weeklyData.list[0].dt * 1000);
  // setDate(new Intl.DateTimeFormat('en-GB').format(currentDate));
  return (
    <div className='container mx-auto '>
      <h1 className='text-white text-5xl font-bold font-rale py-5'>Weekly Forcast for {city}</h1>
      {weeklyData && (
        <div>
          {/* {weeklyData.list[0].dt} */}

          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
            {weeklyData.list
              .filter((item, index) => indicesToMap.includes(index))
              .map((item, index) => (
                <div key={index} className='bg-white rounded-xl flex flex-col justify-center items-center p-5'>
                  <img className='h-24 w-24' src={require(`../assets/icons/${item.weather[0].icon}.png`)} alt="" />
                  <h1 className='my-auto mx-auto text-3xl my-1'>{item.main.temp}°</h1>
                  <p>{item.dt_txt}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Weekly;
