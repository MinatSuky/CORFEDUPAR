import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"
import precios from "../src/IMGS/image 26.png"
import Sesion5 from '../src/componentes/Sesion5'
import Footer from '../src/componentes/Footer'
import ScrollToTop from '../src/componentes/ScollToTop'

const ValoresComerciales = () => {
  return (
    <div>
      <ScrollToTop/>
      <BarraPrincipal />
            <div className='relative flex justify-around items-center mt-43 lg:mt-40'>
              <img className='w-full ' src={img} alt="" />
              <p className='text-white font-bold lg:text-5xl absolute'>PRECIOS COMERCIALES</p>
            </div>
            <div className='mt-10 mx-3 lg:mx-20 flex flex-col lg:flex-row justify-between items-center lg:items-star gap-5'>             
              <ul className='border-2 w-full lg:w-auto border-green-700 p-5 rounded-xl shadow-xl'>
                <p className='feria font-bold text-lg lg:text-2xl'><span className='text-base-verde-oscuro'>Opción 1:</span> <br /> $15.000.000</p>
                <li>Patrocinadorexclusivo Presencia de su marca en:</li>
                <br />
                <li> - Patrocinador exclusivo</li>
                <li> - Presencia de su marca en:</li>
                <li> - Afiche Promocional impreso</li>
                <li> -  Programa de mano</li>
                <li> - Piezaspromocionales del evento en redes sociales</li>
                <li> - Logo en pantalla</li>
                <li> - Mención en tarima como Patrocinador oficial</li>
                <li> - Momento de marca</li>
                <li> - Zonade experiencia</li>
                <li> - Acreditaciones</li>
                <li> - Área de parqueo</li>
              </ul>
              
              <ul className='border-2 w-full lg:w-auto border-green-700 px-5 pt-5 pb-18 rounded-xl shadow-xl'>
                <p className='feria font-bold text-lg lg:text-2xl'><span className='text-base-verde-oscuro'>Opción 2:</span> <br /> $10.000.000</p>
                <li>Patrocinadorexclusivo Presencia de su marca en:</li>
                <br />
                <li> - Patrocinador sin exclusividad</li>
                <li> - Presencia de su marca en:</li>
                <li> - Programa de mano</li>
                <li> - Piezas promocionales del evento en redes sociales.</li>
                <li> - Logo en pantalla</li>
                <li> - Mención en tarima como Patrocinador oficial</li>
                <li> -  Zona de experiencia</li>
                <li> - Acreditaciones</li>
                <li> - Áreade parqueo</li>
              </ul>

              <ul  className='border-2 w-full lg:w-auto border-green-700 px-5 pt-5 pb-24 rounded-xl shadow-xl'>
                <p className='feria font-bold text-lg lg:text-2xl'><span className='text-base-verde-oscuro'>Opción 3:</span> <br /> $5.000.000</p>
                <li>Patrocinadorexclusivo Presencia de su marca en:</li>
                <br />
                <li> - Patrocinador sin exclusividad</li>
                <li> - Presencia de su marca en:</li>
                <li> - Programa de mano</li>
                <li> - Piezas promocionales del evento en redes sociales.</li>
                <li> - Logo en pantalla</li>
                <li> - Mención en tarima como Patrocinador oficial</li>
                <li> - Acreditaciones</li>
                <li> - Áreade parqueo</li>
              </ul>
            </div>
            <div className='mt-10 mx-3 lg:mx-20'>            
              <ul>
                <p className='feria font-bold text-lg lg:text-3xl'>FORMATOS Y MEDIDAS PARA PRODUCCIÓN:</p>
                <li>El patrocinador deberá proporcionar oportunamente a Corfedupar los siguientes elementos:</li>
                <br />
                <li className='feria text-xl'>Logo en pantalla:</li>
                <li>Los logotipos de marcas que serán reproducidos en pantalla deben estar en formato .mov Full-HD 1920 x 1440 horizontal y vertical.</li>
                <br />
                <li className='feria text-xl'>Logos para redes sociales - Programas de mano redes tienen las siguientes medidas:</li>
                <li>Los logotipos de marca que serán reproducidos en la 290px ancho por 190px de alto (Horizontal) en formato PDF ó PNG.</li>
                <br />
                <li>SilisTriana Comnercial Adviser</li>
                <li>Celular 3238884955</li>
                <li>corfedupar@yahoo.com</li>
              </ul>
            </div>
            <div className='mx-5 mt-10 lg:mx-20'>
              <img src={precios} alt="" />
            </div>
            <Sesion5/>
            <Footer/>
    </div>
  )
}

export default ValoresComerciales
