import React from 'react'
import temp from '../assets/temp.png'
import min from '../assets/min.png'
import max from '../assets/max.png'
import { FaLocationDot } from "react-icons/fa6";
const BigCard = ({data,city,date}) => {
    
    return (
        <div className='text-3xl relative bg-white shadow-xl rounded-xl p-5'>
            <div className="grid grid-cols-2 h-full ">
                <div className='mx-auto my-auto'>
                    <img className='h-48' src={require(`../assets/icons/${data.weather[0].icon}.png`)} alt="vv" />
                    <h1 className='text-center'>{data.weather[0].description}</h1>
                </div>
                <div className='relative'>
                    <div className='h-full flex items-center justify-center'>
                        <h1 className='text-6xl mx-auto flex items-center'><img src={temp} className='h-24 p-2' alt="" />{data.main.temp}°</h1>
                    </div>
                    <div className='absolute top-0 left-0'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='flex'>
                                <img src={min} className='w-12' /><h1>{data.main.temp_min}</h1>
                            </div>
                            <div className='text-lg'>min temp</div>
                        </div>
                    </div>
                    <div className='absolute top-0 right-0'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='flex'>
                                <img src={max} className='w-12' /><h1>{data.main.temp_max}</h1>
                            </div>
                            <div className='text-lg'>max temp</div>
                        </div>
                    </div>
                    <div className='absolute bottom-0'>
                    <div className=''><p className='flex items-center'><FaLocationDot size={25} />{data.name}</p></div>
                    <div className=''><p className='text-lg'>{date}</p></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BigCard
