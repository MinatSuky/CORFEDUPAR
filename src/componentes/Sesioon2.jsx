import React from 'react'
import feria1 from "../IMGS/feria1.JPG"
import feria3 from "../IMGS/feria3.JPG"
import feria4 from "../IMGS/feria4.JPG"
import feria5 from "../IMGS/feria5.JPG"

const Sesioon2 = () => {
  return (
    
          <div className='sm:flex sm:flex-col xl:flex-row mt-10 gap-16'>
            {/* Columna izquierda */}
            <div className='w-[100%] sm:w-[100%] xl:w-[50%] flex flex-col justify-center items-center gap-2 lg:gap-4'>
    
              {/* Imagen grande */}
              <div className='flex gap-2 lg:gap-4 px-4'>
                <div className="w-full overflow-hidden shadow-md shadow-gray-400 rounded-md md:rounded-3xl border border-gray-300">
                  <img className=' w-full h-full object-cover '
                    src={feria5}
                    alt=""
                  />
                </div>
                <div className="w-[50%] sm:w-[50%] xl:w-auto overflow-hidden shadow-md shadow-gray-400 rounded-md md:rounded-3xl border border-gray-300">
                  <img className=' w-full h-full object-cover'
                    src={feria1}
                    alt=""
                  />
                </div>
              </div>
    
              {/* Imágenes pequeñas en fila */}
              <div className='flex gap-2 lg:gap-4 px-4'>
                <div className="w-[50%] sm:w-[50%] xl:w-[90%] overflow-hidden shadow-md shadow-gray-400 rounded-md md:rounded-3xl border border-gray-300">
                  <img className='w-full h-full object-cover'
                    src={feria3}
                    alt=""
                  />
                </div>
                <div className="w-full overflow-hidden shadow-md shadow-gray-400 rounded-md md:rounded-3xl border border-gray-300">
                  <img className=' w-full h-full object-cover'
                    src={feria4}
                    alt=""
                  />
                </div>
              </div>
            </div>
    
            {/* Columna derecha */}
            <div className='w-[100%] mt-10 xl:mt-0 items-center sm:w-[100%] sm:items-center xl:w-[50%] flex justify-around flex-col px-3 md:px-10'>
    
              <p className='mt-4 text-[14px] md:text-lg'> <span className='font-bold'>LA CORPORACION AGROPECUARIA DE FERIAS Y EXPOSICIONES DE VALLEDUPAR – CORFEDUPAR,</span> es una entidad privada sin ánimo de lucro, persona jurídica  con número de matricula 0500451 inscrita en la cámara de comercio de Valledupar desde el 04 de febrero de 1998, pero quien llevo a cabo su primer evento ferial en abril del año 1975 alterno con el Festival Vallenato,  marcando  el inicio de lo que ha sido este evento, quien desde entonces ha venido demostrando que es la vitrina vendedora de la costa, donde año tras año vincula a los ganaderos del Cesar y del resto del país para la muestra de sus hatos ganaderos y avances tecnológicos en sus predios, como también le permite a las empresas locales y nacionales  mostrar sus productos, servicios, avances e innovaciones.</p>
    
              <div className='flex flex-col md:flex-row gap-3 items-start mt-8'>
                <div className='ml-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="#439539" d="M16 2h-2V0h-2v2h-2v2h2v2h2V4h2z" /><path fill="#439539" d="M13.498 6.969q.433.481.782 1.031a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462A4 4 0 1 0 12 6.907v-.032a4 4 0 0 1-2.999-3.817A9 9 0 0 0 8 3.001c-3.489 0-6.514 2.032-8 5c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5a9.2 9.2 0 0 0-.979-1.548a4 4 0 0 1-1.523.517zM6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5" /></svg>
                  <p className='text-base-verde text-xl font-bold md:hidden flex'>VISIÓN</p>
                </div>
                <div >
                  <p className='text-base-verde text-xl font-bold hidden md:flex'>VISIÓN</p>
                  <p className='mt-4 text-[14px] md:text-lg'>Celebrar periódicamente eventos feriales bovinos, equinos, y ovino- caprino , promover y difundir información  útil sobre  el desarrollo de la ganadería y sus cruces en Colombia, fomentar y colaborar con asesorías ganaderas y de organización  a municipios, veredas en el departamento del Cesar que realicen eventos feriales, además de la promoción del  desarrollo empresarial y el emprendimiento en actividades sociales, folclóricas y culturales</p>
                </div>
    
              </div>
              <div className='flex flex-col md:flex-row gap-3 items-start mt-8'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="#439539" d="m772.13 452.84l53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5c60.33-60.34 91.49-135.83 93.5-226.5c-1.59-71.94-21.56-134.32-59.87-187.16M640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28c-5.92-3-11.95-5.8-18.08-8.41V128zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55c-8.07-.8-15.85-1.2-23.33-1.2c-10.54 0-21.09.66-31.64 1.96a360 360 0 0 0-32.36 4.79V128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56c-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128zm308.99 692.99c-48 48-108.33 73-180.99 75.01c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99c19.67-19.67 41.41-35.47 65.22-47.41c38.33-15.04 71.15-23.92 98.44-26.65c5.07-.41 10.2-.7 15.39-.88c.63-.01 1.28-.03 1.91-.03c.66 0 1.35.03 2.02.04c5.11.17 10.15.46 15.13.86c27.4 2.71 60.37 11.65 98.91 26.79c23.71 11.93 45.36 27.69 64.96 47.29c48 48 73 108.33 75.01 180.99c-2.01 72.65-27.01 132.98-75.01 180.98" /><path fill="#5e7b27" d="M544 480H416v64h64v192h-64v64h192v-64h-64z" /></svg>
                  <p className='text-base-verde text-xl font-bold md:hidden flex'>MISIÓN</p>
                </div>
                <div>
                  <p className='text-base-verde text-xl font-bold hidden md:flex'>MISIÓN</p>
                  <p className='mt-4 text-[14px] md:text-lg'>Ser líder en el departamento del Cesar, en la prestación de servicios de subastas ganaderas, garantizando al ganadero  local y nacional la compra de ejemplares de calidad, con responsabilidad y garantías, además lograr posesionar a sus eventos feriales marcas nacionales que quieran darse a conocer, lo cual nos permitiría seguir aportando a nuestro departamento ingresos económicos en hotelería, transporte, restaurantes, almacenes veterinarios entre otros, con la llegada de foráneos.</p>
                </div>
    
              </div>
    
            </div>
    
          </div>
  )
}

export default Sesioon2



