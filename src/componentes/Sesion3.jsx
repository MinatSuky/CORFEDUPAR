import React from 'react'
import MobileSesion3 from "../IMGS/sesion3-mobile.webp"
import sesion3 from "../IMGS/sesion3-1.webp"

const Sesion3 = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center relative mt-20'>
        <img className='object-cover shadow-2xl hidden md:flex' width={2000} height={500} src={sesion3} alt="" />
        <img className='object-cover shadow-2xl flex md:hidden' width={450} height={490} src={MobileSesion3} alt="" />
      </div>
  )
}

export default Sesion3
