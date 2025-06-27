import React from 'react'

const CardSesion3 = ({IMG, text,svg}) => {
  return (
    <div className='w-[250px] hover:w-[550px] group duration-300 ease-in-out h-[75vh] flex items-end justify-center rounded-4xl shadow-2xl shadow-gray-500 relative'>
      <img className='w-full h-full rounded-4xl object-cover' src={IMG} alt="" />
          <div className='absolute w-[70%] duration-300  flex flex-col items-center gap-3 mb-[10%]'>
            <div className='bg-white p-5 rounded-full'>
              {svg}
            </div>
            <p className='text-base-verde text-[10px] group-hover:text-[16px] flex bg-white py-2 px-2 group-hover:py-5 group-hover:px-5 duration-300  font-bold rounded-xl text-center whitespace-nowrap'>
              {text} 
             
            </p>
          </div>
    </div>
  )
}

export default CardSesion3

