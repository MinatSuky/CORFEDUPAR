import React from 'react'
import Sesion2 from '../src/componentes/Sesioon2'
import Sesion3 from '../src/componentes/Sesion3'
import Sesion4 from '../src/componentes/Sesion4'
import Sesion5 from '../src/componentes/Sesion5'
import Sesion6 from '../src/componentes/Sesion6'
import Footer from '../src//componentes/Footer'
import Formulario from '../src/componentes/Formulario'
import ScrollToTop from '../src/componentes/ScollToTop'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import plaza from "../src/IMGS/sesion1.2.png"
import MobileSesion1 from "../src/IMGS/sesion1 Mobile-2.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ScrollToTop/>
      <BarraPrincipal />
      {/* --------- sesion #1 ---------- */}
      <div className='w-[100%] flex flex-col mt-[170px] lg:mt-[190px] items-center justify-end relative'>
        <img className='w-full h-full object-cover shadow-2xl hidden md:flex' src={plaza} alt="" />
        <img className='w-full h-full object-cover shadow-2xl flex md:hidden' src={MobileSesion1} alt="" />
       <Link to={'/Valores'}> <button className='absolute cursor-pointer items-center text-[10px] lg:text-[14px] flex gap-3 lg:bottom-[5%] bottom-[2%] rounded-xl px-5 py-1 lg:px-10 lg:py-3 left-[41%] shadow-2xl lg:left-[24%] bg-white text-base-naranja feria font-bold'>CONSULTA VALORES <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#ea5f28" fill-rule="evenodd" d="M213.304 128h42.654V42.667h-42.654zM42.688 256h85.308v-42.666H42.688zm101.466-81.674L83.84 113.974l30.156-30.166l60.313 60.352zm-30.159 211.187l-30.156-30.165l60.312-60.352l30.157 30.165zM325.12 174.326l-30.157-30.166l60.313-60.352l30.157 30.166zM270.933 464l-80.707-273.873L464 270.934l-62.72 62.72l59.733 59.52l-67.84 67.84l-59.52-59.734z"/></svg></span></button></Link>
      </div>
      {/* --------- sesion #2 ---------- */}
      <p className='text-base-verde text-4xl font-bold text-center mt-16'>¿QUIÉNES SOMOS?</p>
      <Sesion2 />
      {/* --------- sesion #3 ---------- */}
      <Sesion3 />
      {/* --------- sesion #4 ---------- */}
      <Sesion4 />
      {/* --------- sesion #5 ---------- */}
      <Sesion5 />
      {/* --------- sesion #6 ---------- */}
      <p className='text-base-verde font-bold text-4xl mt-20 text-center'>GALERÍA DE IMAGENES</p>
      <Sesion6/>
      {/* --------- Formulario ---------- */}
      <Formulario/>
      {/* --------- FOOTER ---------- */}
      <Footer/>
    </div>
  )
}

export default Home
