import React from 'react'

const SmallCard = (props) => {
    return (
      <>
        <div className='grid grid-cols-2 bg-white p-5 w-full my-auto mx-auto shadow-xl rounded-lg'>
          <img className='w-3/2' src={props.path} />
          <div className='mx-5 my-auto'>
            <h1 className='text-4xl'>{props.value}</h1>
            <p className='text-xl'>{props.name}</p>
          </div>
        </div>
      </>
    )
  }

export default SmallCard
