import React from 'react'
// aliados 
import riendas from "../IMGS/riendas.jpg"
import fidegan from "../IMGS/fedegan.png"
import subagan from "../IMGS/subagan.svg"
import ovicer from "../IMGS/Ovicer.png"


const Sesion5 = () => {
  return (
    <div className='flex flex-col items-center'>
                <p className='text-base-verde font-bold lg:text-4xl mt-14'>NUESTROS ALIADOS</p>
                <div className="w-full flex justify-around overflow-x-auto">
                      <div className='flex w-max lg:h-[130px] h-[90px] gap-10 mt-1 px-10 py-6 ocultar-scroll mb-10'>
                        <img className='w-full hover:scale-105 duration-200' src={ovicer} alt="" />
                        <img className='w-fill hover:scale-105 duration-200' src={fidegan} alt="" />
                        <img className='w-fill hover:scale-105 duration-200' src={subagan} alt="" />
                        <img className='w-fill hover:scale-105 duration-200' src={riendas} alt="" />
                      </div>
                </div>
            </div>
  )
}

export default Sesion5
