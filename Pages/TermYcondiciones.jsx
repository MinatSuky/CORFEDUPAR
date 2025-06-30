import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"
import Footer from '../src/componentes/Footer'

const TermYcondiciones = () => {
    return (
        <div>
            <BarraPrincipal />
            <div className='relative flex justify-around items-center mt-48 lg:mt-40'>
                <img className='w-full ' src={img} alt="" />
                <p className='text-white font-bold lg:text-5xl absolute '>TERMINOS Y CONDICIONES</p>
            </div>
            <div className='mt-20 md:mx-20 mx-5'>
                <span className='font-bold text-black'>Términos y Condiciones para el Tratamiento de Datos Personales
                    Autorización para el tratamiento de datos personales</span>
                <br />
                <br />
                Al diligenciar y enviar este formulario, autorizo de manera libre, previa, expresa, voluntaria e informada a CORFEDUPAR, para que recolecte, almacene, administre y trate mis datos personales conforme a lo establecido en la Ley 1581 de 2012 y sus decretos reglamentarios.
                <br />
                <br />
                Finalidad del tratamiento
                <br />
                <br />
                <span className='font-bold text-black'>Los datos aquí suministrados serán utilizados con los siguientes fines:</span>
                <br />
                <br />
                Registro y control de usuarios según su tipo (persona natural o jurídica)
                <br />
                Contacto vía correo electrónico o telefónico en caso de requerirse
                <br />
                Generación de estadísticas internas o reportes institucionales
                <br />
                Cumplimiento de obligaciones legales
                <br />
                Derechos del titular de los datos
                <br />
                <br />
                <span className='font-bold text-black'>Como titular de los datos personales, tengo derecho a:</span>
                <br />
                Conocer, actualizar y rectificar mis datos
                <br />
                Solicitar prueba de esta autorización
                <br />
                Revocar esta autorización en cualquier momento
                <br />
                Presentar quejas ante la Superintendencia de Industria y Comercio por uso indebido
                <br />
                <br />
                <span className='font-bold text-black'>Responsable del tratamiento</span>
                <br />
                <br />
                [Nombre de tu organización]
                <br />
                Correo de contacto: [tu_email@dominio.com]
                <br />
                Teléfono: [número]
                <br />
                <br />
                <span className='font-bold text-black'>Vigencia:</span>
                <br />
                <br />
                Estos datos se conservarán mientras subsista la finalidad del tratamiento o hasta tanto el titular solicite su eliminación.
            </div>
            <Footer/>
        </div>
    )
}

export default TermYcondiciones
