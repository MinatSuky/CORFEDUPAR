import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-titulos.webp"
import ORGA from "../src/IMGS/organigrama 2.webp"
import Footer from '../src/componentes/Footer'
import ScrollToTop from '../src/componentes/ScollToTop'
import Sesion5 from '../src/componentes/Sesion5'

const Organihrama = () => {
  return (
    <div>
      <ScrollToTop/>
      <BarraPrincipal />
                  <div className='relative flex justify-around items-center mt-43 lg:mt-40'>
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
