import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-corfedupar.png"
import op1 from "../src/IMGS/OPCION1.png"
import op2 from "../src/IMGS/OPCION2.png"
import backing from "../src/IMGS/backing.png"
import comida from "../src/IMGS/zonacomida.png"

const Portafolio = () => {
  return (
    <div>
      <BarraPrincipal />
      <div className='relative flex justify-around items-center mt-48 lg:mt-40'>
        <img className='w-full ' src={img} alt="" />
        <p className='text-white font-bold lg:text-5xl absolute '>PORTAFOLIO COMERCIAL</p>
      </div>
      <div className='contenedor flex flex-col mt-10 mx-5 lg:mx-20'>
        <div className='lg:text-xl'>
          <p className="font-bold">
            En la Feria, vemos los adelantos genéticos logrados por los<br />
            distintos expositores y la tecnología de punta aplicada al campo
          </p>
          <p className='mt-10'>
            La 44° Feria de Exposición Ganadera y Agroindustrial Valledupar 2022 es un evento organizado por Corfedupar: <br />en las instalaciones del Coliseo de Ferias Pedro Castro Monsalvo el cual cada año busca impulsar el sector ganadero y agroindustrial de nuestra región donde propios y extraños tienen la oportunidad de admirar el mejor ganado del país, Juzgamiento de las razas Brahman, Gyr, F1y sus cruces Guzera y Doble, Feria Equina Grado B, la mejor muestra agroindustrial, folclórica y cultural.
          </p>
          <p className='mt-5'>
            De su mano, continuaremos construyendo la historia de nuestras raíces ganaderas y agroindustriales que  cumplen 45 años de tradición en el Cesar y en la región de la costa caribe
          </p>
        </div>
        <div className='mt-16 mb-8'>
          <p className='text-base-verde-oscuro font-bold text-lg lg:text-5xl text-shado feria'>¿QUIÉNES ASISTEN A LA FERIA?</p>
          <p className='mt-5 lg:text-xl'>
            Nos visitan alrededor de 140 expositores ganaderos y comerciales, empresas de la región y visitantes de los departamentos de Cundinamarca, Cordoba, Sucre, Magadalena, Santander, Cesar, Norte de Santander , Atlántico y Bolivar.
            Esperamos contar con la presencia de 25.000 personas durante los días de la Feria.
          </p>
          <p className='font-[700] mt-3 text-sm lg:text-xl'> - 300 ejemplares expocisión cebú 40 Ganaderías</p>
          <p className='font-[700] mt-3 text-sm lg:text-xl'> - 150 ejemplares doble propósito 16 Ganaderías</p>
          <p className='font-[700] mt-3 text-sm lg:text-xl'> - 200 ejemplares ovinos y caprinos 25 Criaderos de la región</p>
          <p className='font-[700] mt-3 text-sm lg:text-xl'> - 150 ejemplares equinos de paso 60 Criaderos de la región</p>
        </div>
        < hr />
        <div className='OPCION#1 flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div>
            <p className='text-base-verde-oscuro font-bold text-xl lg:text-5xl text-shado feria'>OPCIÓN 1</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">STAND COMERCIAL ZONA ALTERNA - INGRESO</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">INCLUYE:</p>
            <ul className='mt-5 lg:text-xl'>
              <li> * MESA DE TRABAJO (RIMAX).</li>
              <li> * 2 SILLAS RIMAX.</li>
              <li> * 1 TOMA CORRIENTE A 110V.</li>
              <li> * 1 CARPA 4x4 BLANCA.</li>
              <li> * 4 INGRESOS COMO EXPOSITOR.</li>
              <li> * COMERCIAL DURANTE EL EVENTO.</li>
              <li> * LOS VALORES VARIAN DE ACUERDO A LA UBICACIÓN.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={op1} alt="" />
        </div>
        <hr />
        <div className='OPCION#2 flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div>
            <p className='text-base-verde-oscuro font-bold text-xl lg:text-5xl text-shado feria'>OPCIÓN 2</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">ZONA DE VEHICULOS ENTRADA ALTERNA Y MAQUINARIA <br /> PLAZOLETA COLISEO MULTIPROPOSITO</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">INCLUYE:</p>
            <ul className='mt-5 lg:text-xl'>
              <li> * MESA DE TRABAJO (RIMAX).</li>
              <li> * 2 SILLAS RIMAX.</li>
              <li> * 1 CARPA 4x4 BLANCA.</li>
              <li> * EL ESPACIO DELIMITADO PARA LA
                EXHIBICION DE VEHICULOS, <br /> TRACTORES  Y ACCESORIOS PESADOS.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={op2} alt="" />
        </div>
        <hr />
        <div className='BACKING flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div className='lg:w-[50%]'>
            <p className='text-base-verde-oscuro font-bold text-xl lg:text-5xl text-shado feria'>BACKING</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">DE 4X3 METROS EN PISTA DE JUZGAMIENTO Y DUMMY</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">BACKING:</p>
            <ul className='mt-5'>
              <li className='lg:text-2xl'>IMAGEN EDITABLE ENTREGADA POR EL CLIENTE. <br /> VALOR: $5.000.000.</li>
              <li className='lg:text-2xl mt-10'>EL COSTO DEL ESPACIO VARIA DE ACUERDO AL PRODUCTO A PROMOCIONAR.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={backing} alt="" />
        </div>
        <hr />
        <div className='ZONACOMIDA flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div>
            <p className='text-base-verde-oscuro font-bold text-xl lg:text-5xl text-shado feria'>ZONA DE COMIDA</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">COLISEO MULTIPROPOSITO LUIS ALBERTO MONSALVO RAMIREZ</p>
            <ul className='mt-5'>
              <li className='lg:text-2xl'>ES UN ESPACIO APROXIMADO DE 3X4; QUE TIENE LAVAPLATO; <br /> ABANICO DE TECHO.
                Y UN ESPACION EN FRENTE DEL STAND <br />
                PARA COLOCAR MESAS Y SILLAS</li>
              <li className='lg:text-2xl mt-10'>DUMIS: ENTREGADOS POR EL CLIENTE PARA SER UBICADOS, <br />
                DE ACUERDO EL TAMAÑO SERA EL VALOR.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={comida} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portafolio
