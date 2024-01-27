import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
const TempChart = ({ data }) => {
    return (
        <div className='bg-white rounded-xl flex justify-center'>

    <Line
        data={{
            labels: data.map((data) => data.dt_txt),
            datasets: [{
                label: 'Temperature',
                borderColor: '#0ea5e9',
                backgroundColor: '#bae6fd',
                data: data.map((data) => data.main.temp),
                fill: true,
                cubicInterpolationMode: 'monotone',
                pointRadius: 3,
            }],
        }}
        options={{
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },

        }}
    />
</div>

    );
};

export default TempChart;

