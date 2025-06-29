import React from 'react'
import MobileSesion3 from "../IMGS/sesion3 mobile.png"
import sesion3 from "../IMGS/sesion3-1.png"

const Sesion3 = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center relative mt-20'>
        <img className='w-full h-full object-cover shadow-2xl hidden md:flex' src={sesion3} alt="" />
        <img className='w-full h-full object-cover shadow-2xl flex md:hidden' src={MobileSesion3} alt="" />
      </div>
  )
}

export default Sesion3
