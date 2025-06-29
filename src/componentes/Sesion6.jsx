import React from 'react'
// Galeria de imagenes
import Foto1 from "../IMGS/galeria1.JPG"
import Foto2 from "../IMGS/galeria2.JPG"
import Foto3 from "../IMGS/galeria3.JPG"
import Foto4 from "../IMGS/galeria4.JPG"
import Foto5 from "../IMGS/galeria5.JPG"
import Foto6 from "../IMGS/galeria6.JPG"
import Foto7 from "../IMGS/galeria7.JPG"
import Foto8 from "../IMGS/galeria8.JPG"
import Foto9 from "../IMGS/galeria9.JPG"
import Foto10 from "../IMGS/galeria10.JPG"


const Sesion6 = () => {
  return (
    <div className="galeria mx-0 md:mx-10 mt-20">
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto1} alt="Imagen 1" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto2} alt="Imagen 2" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto3} alt="Imagen 3" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto4} alt="Imagen 4" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto5} alt="Imagen 5" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto6} alt="Imagen 6" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto7} alt="Imagen 7" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto8} alt="Imagen 8" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto9} alt="Imagen 9" />
            <img className='hover:scale-105 duration-200 shadow-2xl' src={Foto10} alt="Imagen 10" />
          </div>
  )
}

export default Sesion6
