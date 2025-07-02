import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"
import Sesion5 from '../src/componentes/Sesion5'
import Footer from '../src/componentes/Footer'
import plaza from "../src/IMGS/plaza.JPG"
import ScrollToTop from '../src/componentes/ScollToTop'

const Expositor = () => {
  return (
    <div>
      <ScrollToTop />
      <BarraPrincipal />
      <div className='relative flex justify-around items-center mt-43 lg:mt-40'>
        <img className='w-full ' src={img} alt="" />
        <p className='text-white font-bold lg:text-5xl absolute '>SOY EXPOSITOR</p>
      </div>
      <div className=' mx-5 lg:mx-20 mt-20 mb-20'>

        <div className='flex flex-col lg:flex-row gap-5 items-start mt-10'>
          <div className='w-full lg:w-[50%]'>
            <p className='feria font-bold lg:text-4xl text-[#015811]'>Perfil del expositor</p>
            <p className='lg:text-xl  mt-10'><span className='font-bold'>¡Vive la experiencia CORFEDUPAR!</span> <br />
              El punto de encuentro de las empresas líderes en maquinaria agrícola, insumos agropecuarios, ganadería e industrias afines. Una vitrina comercial que conecta directamente a proveedores con compradores nacionales e internacionales, creando nuevas oportunidades de negocio en un solo lugar. <br />
              <br />
              <br />
              CORFEDUPAR es la feria de la producción para la vida, un evento que celebra la innovación, el trabajo del campo y las iniciativas que impulsan el crecimiento sostenible del sector productivo. ¡Aquí es donde nacen los grandes proyectos del agro!</p>
          </div>
          <div className='lg:w-[50%] mt-4'>
            <img className='rounded-2xl shadow-2xl' src={plaza} alt="" />
          </div>
        </div>
      </div>
      <Sesion5 />
      <Footer />
    </div>
  )
}

export default Expositor
