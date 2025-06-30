import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"
import Sesion5 from '../src/componentes/Sesion5'
import Footer from '../src/componentes/Footer'
import plaza from "../src/IMGS/feria4.JPG"

const Corfedupar = () => {
    return (
        <div>
            <BarraPrincipal />
            <div className='relative flex justify-around items-center mt-48 lg:mt-40'>
                <img className='w-full ' src={img} alt="" />
                <p className='text-white font-bold lg:text-5xl absolute '>SOBRE LA FERIA</p>
            </div>
            <div className=' mx-5 lg:mx-20 mt-20 mb-30 lg:mb-70'>
                <p className='feria font-bold lg:text-5xl'>Corfedupar</p>
                <div className='flex flex-col lg:flex-row gap-5 items-center mt-10'>
                    <div className='w-full lg:w-[50%]'>
                        <span className='font-bold'>La Corporación Agropecuaria de Ferias y Exposiciones de Valledupar</span> – CORFEDUPAR es una entidad privada sin ánimo de lucro, con personería jurídica inscrita en la Cámara de Comercio de Valledupar desde el 4 de febrero de 1998 bajo el número de matrícula 0500451. No obstante, su historia se remonta mucho más atrás: fue en abril de 1975, en el marco del Festival Vallenato, cuando se llevó a cabo su primer evento ferial, marcando así el nacimiento de una de las plataformas más importantes para el sector agropecuario del país.
<br />
<br />
                        Desde entonces, CORFEDUPAR se ha consolidado como la gran vitrina comercial de la Costa Caribe colombiana, reuniendo año tras año a ganaderos del Cesar y de diversas regiones del país para exhibir la calidad de sus hatos, compartir avances tecnológicos y fortalecer los lazos del gremio agropecuario. Además, se ha convertido en un escenario estratégico donde empresas locales y nacionales presentan sus productos, servicios e innovaciones, impulsando así el desarrollo económico y el progreso del sector rural.
<br />
<br />
                        Hoy, CORFEDUPAR es sinónimo de tradición, modernización y proyección, siendo parte integral del crecimiento agroindustrial de la región y del país.
                    </div>
                    <div className='lg:w-[50%]'>
                        <img className='rounded-2xl shadow-2xl' src={plaza} alt="" />
                    </div>
                </div>
            </div>
            <Sesion5 />
            <Footer />
        </div>
    )
}

export default Corfedupar
