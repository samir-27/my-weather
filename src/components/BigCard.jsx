import React from 'react'
import temp from '../assets/temp.png'
import min from '../assets/min.png'
import max from '../assets/max.png'
import { FaLocationDot } from "react-icons/fa6";
const BigCard = ({data,date}) => {
    // console.log(data)
    return (
        <div className='text-3xl relative bg-white shadow-xl rounded-xl p-5'>
            <div className="grid grid-cols-2 h-full ">
                <div className='mx-auto my-auto'>
                    <img className='lg:h-48 md:h-36' src={require(`../assets/icons/${data.weather[0].icon}.png`)} alt="" />
                    <h1 className='text-center'>{data.weather[0].description}</h1>
                </div>
                <div className='relative'>
                    <div className='h-full flex items-center justify-center'>
                        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-3xl mx-auto flex items-center'><img src={temp} className='lg:h-24 md:h-20 h-16 p-2' alt="" />{data.main.temp}°</h1>
                    </div>
                    <div className='absolute top-0 left-0'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='flex items-center'>
                                <img src={min} className='lg:h-12 md:h-10 h-8' alt='' /><h1 className='lg:text-2xl md:text-2xl text-lg'>{data.main.temp_min}</h1>
                            </div>
                            <div className='lg:text-lg md:text-md text-sm'>min temp</div>
                        </div>
                    </div>
                    <div className='absolute top-0 right-0'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='flex items-center'>
                                <img src={max} className='lg:h-12 md:h-10 h-8' alt=''/><h1 className='lg:text-2xl md:text-2xl text-lg'>{data.main.temp_max}</h1>
                            </div>
                            <div className='lg:text-lg md:text-md text-sm'>max temp</div>
                        </div>
                    </div>
                    <div className='absolute bottom-0'>
                    <div className=''><p className='flex items-center'><FaLocationDot size={25} />{data.name}</p></div>
                    <div className=''><p className='lg:text-lg md:text-lg text-sm'>{date}</p></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BigCard
