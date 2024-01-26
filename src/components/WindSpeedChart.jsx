import React from 'react'
import { Line } from 'react-chartjs-2'

const WindSpeedChart = ({ WeatherData }) => {
  return (
    <div className='bg-white rounded-xl'>
      <Line
        data={{
          labels: WeatherData.map((data) => data.dt_txt),
          datasets: [
            {
              label: 'Wind Speed',
              data: WeatherData.map((data) => data.wind.speed),
              borderColor: '#ea580c',
              backgroundColor: '#fdba74',
              fill: true,
              cubicInterpolationMode: 'monotone',
              pointRadius: 3,
            },
 
          ],
          
        }}
      />
    </div>
  )
}

export default WindSpeedChart
