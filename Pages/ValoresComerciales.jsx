import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"

const ValoresComerciales = () => {
  return (
    <div>
      <BarraPrincipal />
            <div className='relative flex justify-around items-center mt-48 lg:mt-40'>
              <img className='w-full ' src={img} alt="" />
              <p className='text-white font-bold lg:text-5xl absolute'>PRECIOS COMERCIALES</p>
            </div>
    </div>
  )
}

export default ValoresComerciales
