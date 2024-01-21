import axios from 'axios'
import React, { useEffect, useState } from 'react'
import direction from '../assets/direction.png'
import humidity from '../assets/humidity.png'
import pressure from '../assets/pressure.png'
import wind from '../assets/wind.png'
const Current = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null)
  const API_KEY = "Your api key"
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
        // console.log(weatherData)
        const currentDate = new Date(response.data.dt * 1000)
        setDate(new Intl.DateTimeFormat('en-GB').format(currentDate))
      })
      .catch((error) => {
        console.error('Error Fetching Data', error)
      });
  }, [city])
  const SmallCard = (props) => {
    return (
      <>
        <div className='grid grid-cols-2 bg-white p-5 max-w-72 my-auto mx-auto shadow-xl rounded-lg'>
          <img className='w-3/2' src={props.path} />
          <div className='mx-5 my-auto'>
            <h1 className='text-4xl'>{props.value}</h1>
            <p className='text-xl'>{props.name}</p>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='container mx-auto relative'>
      {weatherData && (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <div className='text-3xl relative'>
            <div className='relative'>
              <img className='' src='https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmoyouth/s3fs-public/field/image/copyright-photo/link_9.png?jNS4aiZoeCEyJ.m2vQ.dbBDbhoACG8n5' alt='Weather Icon'></img>
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            </div>
            <div className='absolute bottom-8 left-3 text-white'>
              <p>{date}</p>
            </div>
            <div className='absolute bottom-8 right-3 text-white'>
              <h1 className='text-6xl'>{weatherData.main.temp}°</h1>
              <h1 className='text-xl'>{city}</h1>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <SmallCard name="humidity" value={weatherData.main.humidity} path={humidity}/>
            <SmallCard name="pressure" value={weatherData.main.pressure} path={pressure}/>
            <SmallCard name="wind speed" value={weatherData.wind.speed} path={wind}/>
            <SmallCard name="wind direction" value={weatherData.wind.deg} path={direction}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Current
