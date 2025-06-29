import './App.css'
import { BarraPrincipal } from './componentes/BarraPrincipal'
import plaza from "../src/IMGS/sesion1.2.png"
import MobileSesion1 from "../src/IMGS/sesion1 Mobile-2.png"



import Sesion2 from './componentes/sesion2'
import Sesion3 from './componentes/Sesion3'
import Sesion4 from './componentes/Sesion4'
import Sesion5 from './componentes/Sesion5'
import Sesion6 from './componentes/Sesion6'
import Footer from './componentes/Footer'
import Formulario from './componentes/Formulario'

function App() {

  return (
    <>
      <BarraPrincipal />
      {/* --------- sesion #1 ---------- */}
      <div className='w-[100%] flex flex-col mt-[190px] items-center justify-center relative'>
        <img className='w-full h-full object-cover shadow-2xl hidden md:flex' src={plaza} alt="" />
        <img className='w-full h-full object-cover shadow-2xl flex md:hidden' src={MobileSesion1} alt="" />
      </div>
      {/* --------- sesion #2 ---------- */}
      <p className='text-base-verde text-4xl font-bold text-center mt-16'>¿Quienes Somos?</p>
      <Sesion2 />
      {/* --------- sesion #3 ---------- */}
      <Sesion3 />
      {/* --------- sesion #4 ---------- */}
      <Sesion4 />
      {/* --------- sesion #5 ---------- */}
      <Sesion5 />
      {/* --------- sesion #6 ---------- */}
      <p className='text-base-verde font-bold text-4xl mt-20 text-center'>Galeria de Imagenes</p>
      <Sesion6/>
      {/* --------- Formulario ---------- */}
      <Formulario/>
      {/* --------- FOOTER ---------- */}
      <Footer/>

    </>
  )
}

export default App
