import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-titulos.webp"
import Sesion5 from '../src/componentes/Sesion5'
import Footer from '../src/componentes/Footer'
import plaza from "../src/IMGS/galeria1.webp"
import ScrollToTop from '../src/componentes/ScollToTop'

const BeneficiosExpositor = () => {
    return (
        <div>
            <ScrollToTop/>
            <BarraPrincipal />
            <div className='relative flex justify-around items-center mt-43 lg:mt-40'>
                <img className='w-full ' src={img} alt="" />
                <p className='text-white font-bold lg:text-5xl absolute '>BENEFICIOS DEL EXPOSITOR</p>
            </div>
            <div className=' mx-5 lg:mx-20 mt-20 mb-10'>
                
                <div className='flex flex-col lg:flex-row gap-5 items-start mt-10'>
                    <div className='w-full lg:w-[50%]'>
                        <p className='feria font-bold lg:text-4xl text-base-verde-oscuro mb-10'>Beneficios para el expositor</p>
                        <span className='font-bold'>CORFEDUPAR</span> se ha consolidado como el punto de referencia comercial más destacado del sector agropecuario, ofreciendo una plataforma estratégica para proyectarse a nivel nacional e internacional.
                        <br />
                        <br />
                        Este evento no solo impulsa la visibilidad de marcas y empresas, sino que también se convierte en el escenario perfecto para el lanzamiento de nuevos productos, presentación de innovaciones tecnológicas, modernización de maquinaria agrícola y promoción de insumos especializados.
                        <br />
                        <br />
                        <span className='font-bold'>¿Por qué participar como expositor?</span>
                        <br />
                        <br />
                        - Reúne en un solo lugar a todos los protagonistas del sector agropecuario.
                        <br />
                        - Contribuye al crecimiento y fortalecimiento del agro colombiano.
                        <br />
                        - Es un espacio clave para crear y consolidar alianzas comerciales.
                        <br />
                        - Ofrece una excelente oportunidad para posicionar su marca ante un público objetivo.
                        <br />
                        - Facilita la generación de contactos valiosos y oportunidades de negocio.
                        <br />
                        - Permite mantenerse al día con las últimas tendencias, conocimientos y avances del sector.
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

export default BeneficiosExpositor
