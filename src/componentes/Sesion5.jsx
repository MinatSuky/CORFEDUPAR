import React from 'react'
// aliados 
import riendas from "../IMGS/riendas.jpg"
import fidegan from "../IMGS/fedegan.png"
import subagan from "../IMGS/subagan.svg"
import ovicer from "../IMGS/Ovicer.png"


const Sesion5 = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
                <p className='text-base-verde font-bold text-4xl mt-6'>Nuestros Aliados</p>
                <div className="w-full flex justify-around ocultar-scroll overflow-x-auto">
                      <div className='flex w-max h-[200px] gap-10 mt-10 px-4 py-6 mb-10'>
                        <img className='w-full hover:scale-105 duration-200' src={riendas} alt="" />
                        <img className='w-fill hover:scale-105 duration-200' src={fidegan} alt="" />
                        <img className='w-fill hover:scale-105 duration-200' src={subagan} alt="" />
                        <img className='w-fill hover:scale-105 duration-200' src={ovicer} alt="" />
                      </div>
                </div>
            </div>
  )
}

export default Sesion5
