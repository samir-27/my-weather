import React from 'react'

const SmallCard = (props) => {
    return (
      <>
        <div className='grid grid-cols-2 bg-white p-5 w-full my-auto mx-auto shadow-xl rounded-lg'>
          <img className='' src={props.path} />
          <div className='mx-5 my-auto'>
            <h1 className='lg:text-2xl md:text-2xl sm:text-xl text-xl'>{props.value}</h1>
            <p className='lg:text-xl md:text-xl'>{props.name}</p>
          </div>
        </div>
      </>
    )
  }

export default SmallCard
