import React from 'react'
import { Line } from 'react-chartjs-2'


const HumidityChart = ({ WeatherData }) => {
    // console.log(WeatherData)
    return (
        <div className='bg-white rounded-xl shadow-xl'>
            <Line
                data={{
                    labels: WeatherData.map((data) => data.dt_txt),
                    datasets: [
                        {
                            label: 'Humidity',
                            data: WeatherData.map((data) => data.main.humidity),
                            borderColor: '#4f46e5',
                            backgroundColor: '#a5b4fc',
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

export default HumidityChart
