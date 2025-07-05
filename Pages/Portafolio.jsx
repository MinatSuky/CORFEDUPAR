import React from 'react'
import { BarraPrincipal } from '../src/componentes/BarraPrincipal'
import img from "../src/IMGS/img-titulos.webp"
import op1 from "../src/IMGS/OPCION1.webp"
import op2 from "../src/IMGS/OPCION2.webp"
import backing from "../src/IMGS/backing.webp"
import comida from "../src/IMGS/zonaeat.webp"
import Sesion5 from '../src/componentes/Sesion5'
import Footer from '../src/componentes/Footer'
import ScrollToTop from '../src/componentes/ScollToTop'

const Portafolio = () => {
  return (
    <div>
      <ScrollToTop/>
      <BarraPrincipal />
      <div className='relative flex justify-around items-center mt-43 lg:mt-40'>
        <img className='w-full ' src={img} alt="" />
        <p className='text-white font-bold lg:text-5xl absolute'>PORTAFOLIO COMERCIAL</p>
      </div>
      <div className='contenedor flex flex-col mt-10 mx-5 lg:mx-20'>
        <p className='feria font-bold lg:text-5xl text-base-verde-oscuro'>Portafolio</p>
        
        <div className='lg:text-xl mt-5'>
          <p className="font-bold">
            En la Feria, vemos los adelantos genéticos logrados por los<br />
            distintos expositores y la tecnología de punta aplicada al campo
          </p>
          <p className='mt-10'>
            La 44° Feria de Exposición Ganadera y Agroindustrial Valledupar 2025 es un evento organizado por Corfedupar: <br />en las instalaciones del Coliseo de Ferias Pedro Castro Monsalvo el cual cada año busca impulsar el sector ganadero y agroindustrial de nuestra región donde propios y extraños tienen la oportunidad de admirar el mejor ganado del país, Juzgamiento de las razas Brahman, Gyr, F1y sus cruces Guzera y Doble, Feria Equina Grado B, la mejor muestra agroindustrial, folclórica y cultural.
          </p>
          <p className='mt-5'>
            De su mano, continuaremos construyendo la historia de nuestras raíces ganaderas y agroindustriales que  cumplen 45 años de tradición en el Cesar y en la región de la costa caribe
          </p>
        </div>
        <div className='mt-16 mb-8'>
          <p className='text-base-verde-oscuro font-bold text-lg lg:text-4xl feria'>¿Quiénes asisten a la feria?</p>
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
            <p className='text-base-verde-oscuro font-bold text-lg lg:text-4xl feria'>Opción 1</p>
            <p className="font-[700] text-sm lg:text-xl">Stand Comercial Zona Alterna - Ingreso</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">INCLUYE:</p>
            <ul className='mt-5 lg:text-xl'>
              <li> * Mesa de trabajo (rimax).</li>
              <li> * 2 Sillas Rimax.</li>
              <li> * 1 Toma Corriente A 110V.</li>
              <li> * 1 Carpa 4X4 Blanca.</li>
              <li> * 4 Ingresos Como Expositor.</li>
              <li> * Comercial Durante El Evento.</li>
              <li> * Los Valores Varian De Acuerdo A La Ubicación.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={op1} alt="" />
        </div>
        <hr />
        <div className='OPCION#2 flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div>
            <p className='text-base-verde-oscuro font-bold text-lg lg:text-4xl feria'>Opción 2</p>
            <p className="font-[700] text-sm lg:text-xl">Zona De Vehículos Entrada Alterna Y Maquinaria <br /> Plazoleta Coliseo Multipropósito</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">INCLUYE:</p>
            <ul className='mt-5 lg:text-xl'>
              <li> * Mesa De Trabajo (Rimax).</li>
              <li> * 2 Sillas Rimax.</li>
              <li> * 1 Carpa 4X4 Blanca.</li>
              <li> * El Espacio Delimitado Para La
                Exhibicion De Vehiculos, <br /> Tractores  Y Accesorios Pesados.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={op2} alt="" />
        </div>
        <hr />
        <div className='BACKING flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div className='lg:w-[50%]'>
            <p className='text-base-verde-oscuro font-bold text-lg lg:text-4xl feria'>Backing</p>
            <p className="font-[700] text-sm lg:text-xl">De 4X3 Metros En Pista De Juzgamiento Y Dummy</p>
            <p className="mt-4 font-[700] text-sm lg:text-xl">BACKING:</p>
            <ul className='mt-5'>
              <li className='lg:text-2xl'>Imagen Editable Entregada Por El Cliente. <br /> Valor: $5.000.000.</li>
              <li className='lg:text-2xl '>El Costo Del Espacio Varia De Acuerdo Al Producto A Promocionar.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={backing} alt="" />
        </div>
        <hr />
        <div className='ZONACOMIDA flex flex-col lg:flex-row justify-between mt-6 mb-8'>
          <div>
            <p className='text-base-verde-oscuro font-bold text-lg lg:text-4xl feria'>Zona de comida</p>
            <p className="mt-4 font-[700] text-sm lg:text-2xl">Coliseo multipropósito Luis Alberto Monsalvo Ramirez</p>
            <ul className='mt-5'>
              <li className='lg:text-2xl'>Es un espacio aproximado de 3x4; que tiene lavaplato; <br /> abanico de techo.
                Y un espacio en frente del stand <br />
                para colocar mesas y sillas</li>
              <li className='lg:text-2xl mt-10'>Dumis: entregados por el cliente para ser ubicados, <br />
                de acuerdo el tamaño será el valor.</li>
            </ul>
          </div>
          <img className='lg:w-[40%] mt-7 lg:mt-0 rounded-xl shadow-2xl' src={comida} alt="" />
        </div>
      </div>
      <Sesion5/>
      <Footer/>  
    </div>
  )
}

export default Portafolio
