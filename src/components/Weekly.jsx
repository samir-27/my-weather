import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempChart from './TempChart';
import WindSpeedChart from './WindSpeedChart';
import HumidityChart from './HumidityChart';
import DayCard from './DayCard';

const Weekly = ({ location, selectedTime }) => {
  const [weeklyData, setWeeklyData] = useState(null);
  const API_KEY = 'fd136502e52304c726be3e7ebc6f4d33';

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

  // Filter forecast data based on user-selected time slot
  const filterBySelectedTime = () => {
    if (!weeklyData || !weeklyData.list) return [];
    
    // If 'current' is selected, default to mid-day (12:00:00) for daily view cards
    const timeToMatch = selectedTime === 'current' ? '12:00:00' : selectedTime;

    return weeklyData.list.filter((item) => item.dt_txt.includes(timeToMatch));
  };

  const filteredDays = filterBySelectedTime();

  return (
    <div className="mt-5">
      {weeklyData && (
        <div>
          {selectedTime !== 'current' && (
             <h2 className="text-white text-xl font-bold mb-2">5-Day Forecast ({selectedTime})</h2>
          )}
          
          {/* Reverted back to the original vertically stacked UI */}
          <div className="grid mt-3 gap-3">
            {filteredDays.map((item, index) => (
              <DayCard key={index} item={item} />
            ))}
          </div>

          <div className="mt-5">
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