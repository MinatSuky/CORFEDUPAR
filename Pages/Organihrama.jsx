import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"
import ORGA from "../src/IMGS/Desktop - 6.png"
import Footer from '../src/componentes/Footer'

const Organihrama = () => {
  return (
    <div>
      <BarraPrincipal />
                  <div className='relative flex justify-around items-center mt-48 lg:mt-40'>
                      <img className='w-full ' src={img} alt="" />
                      <p className='text-white font-bold lg:text-5xl absolute '>ORGANIGRAMA</p>
                  </div>
                  <div className='w-full flex justify-center' >
                    <img className='lg:w-[60%]'  src={ORGA} alt="" />
                  </div>
                  <Footer/>
    </div>
  )
}

export default Organihrama
