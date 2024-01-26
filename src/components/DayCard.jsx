import React from 'react'

const DayCard = ({item}) => {
  return (
    <div>
      <div className='bg-white rounded-xl flex flex-col justify-center items-center p-5 shadow-xl'>
        <img className='h-24 w-24' src={require(`../assets/icons/${item.weather[0].icon}.png`)} alt="" />
        <h1 className='my-auto mx-auto text-3xl my-1'>{item.main.temp}°</h1>
        <p className='lg:text-md md:text-sm sm:text-sm text-xs'>{item.dt_txt}</p>
      </div>
    </div>
  )
}

export default DayCard
