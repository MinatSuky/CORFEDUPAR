
import './App.css'
import { BarraPrincipal } from './componentes/BarraPrincipal'
import feria1 from "../src/IMGS/feria1.JPG"
import feria3 from "../src/IMGS/feria3.JPG"
import feria4 from "../src/IMGS/feria4.JPG"
import feria5 from "../src/IMGS/feria5.JPG"
import plaza from "../src/IMGS/sesion1.2.png"
import MobileSesion1 from "../src/IMGS/sesion1 Mobile-2.png"
import MobileSesion3 from "../src/IMGS/sesion3 mobile.png"
import sesion3 from "../src/IMGS/sesion3-1.png"
// Servicios
import ser1 from "../src/IMGS/servicio 1.jpg"
import ser2 from "../src/IMGS/servicio 2.jpeg"
import ser3 from "../src/IMGS/servicio 3.jpg"
import ser4 from "../src/IMGS/servicio 4.jpg"
import ser5 from "../src/IMGS/servicio 5.jpg"
import CardSesion3 from './componentes/CardSesion3'
// aliados 
import riendas from "../src/IMGS/riendas.jpg"
import fidegan from "../src/IMGS/fedegan.png"
import subagan from "../src/IMGS/subagan.svg"
import ovicer from "../src/IMGS/Ovicer.png"
// Galeria de imagenes


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

          <p className='mt-4 text-[14px] md:text-lg'> <span className='font-bold'>LA CORPORACION AGROPECUARIA DE FERIAS Y EXPOSICIONES DE VALLEDUPAR – CORFEDUPAR,</span> es una entidad privada sin ánimo de lucro, persona jurídica  con numero de matricula 0500451 inscrita en la cámara de comercio de Valledupar desde el 04 de febrero de 1998, pero quien llevo a cabo su primer evento ferial en abril del año 1975 alterno con el Festival vallenato,  marcando  el inicio de lo que ha sido este evento, quien desde entonces ha venido demostrando que es la vitrina vendedora de la costa, donde año tras año vincula a los ganaderos del cesar y del resto del país para la muestra de sus hatos ganaderos y avances tecnológicos en sus predios, como también le permite a las empresas locales y nacionales  mostrar sus productos, servicios, avances e innovaciones.</p>

          <div className='flex flex-col md:flex-row gap-3 items-start mt-8'>
            <div className='ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="#439539" d="M16 2h-2V0h-2v2h-2v2h2v2h2V4h2z" /><path fill="#439539" d="M13.498 6.969q.433.481.782 1.031a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462A4 4 0 1 0 12 6.907v-.032a4 4 0 0 1-2.999-3.817A9 9 0 0 0 8 3.001c-3.489 0-6.514 2.032-8 5c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5a9.2 9.2 0 0 0-.979-1.548a4 4 0 0 1-1.523.517zM6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5" /></svg>
              <p className='text-base-verde text-xl font-bold md:hidden flex'>VISIÓN</p>
            </div>
            <div >
              <p className='text-base-verde text-xl font-bold hidden md:flex'>VISIÓN</p>
              <p className='mt-4 text-[14px] md:text-lg'>Celebrar periódicamente eventos feriales bovinos, equinos, y ovino- caprino , Promover y difundir información  útil sobre  el desarrollo de la ganadería y sus cruces en Colombia, fomentar y colaborar con asesorías ganaderas y de organización  a municipios, veredas en el departamento del cesar que realicen eventos feriales, además de la promoción del  desarrollo empresarial y el emprendimiento en actividades sociales, folclóricas y culturales</p>
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
      {/* --------- sesion #3 ---------- */}
      <div className='w-[100%] flex flex-col items-center justify-center relative mt-20'>
        <img className='w-full h-full object-cover shadow-2xl hidden md:flex' src={sesion3} alt="" />
        <img className='w-full h-full object-cover shadow-2xl flex md:hidden' src={MobileSesion3} alt="" />
      </div>
      {/* --------- sesion #4 ---------- */}
      <div className='flex flex-col items-center mt-20'>
        <p className='text-base-verde font-bold text-4xl mt-6'>Nuestros Servicios</p>
        <div className="w-full flex justify-around overflow-x-auto">
          <div className="flex w-max gap-5 mt-10 px-4 py-6 mb-10">
            <CardSesion3 IMG={ser4} text="•	CAPACITACÓN GENERAL" svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 20"><path fill="#65a30d" d="M3.33 8L10 12l10-6l-10-6L0 6h10v2zM0 8v8l2-2.22V9.2zm10 12l-5-3l-2-1.2v-6l7 4.2l7-4.2v6z"/></svg>} />
            <CardSesion3 IMG={ser1} text="•	EVENTOS FERIALES ANUALES" svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#65a30d" d="M5.24 14.42c-.04 1.76-.18 3.72-.58 5.58h2.67c.27-1.94.43-4.07.52-5.93c-.31-.17-.6-.37-.85-.63c-.47.49-1.08.83-1.76.98M11 11H8c0 .83.67 1.5 1.5 1.5S11 11.83 11 11m-5 0H3c0 .83.67 1.5 1.5 1.5S6 11.83 6 11m6-6.29C10.67 5.85 8.51 7.55 5.89 9h12.23C15.49 7.55 13.33 5.85 12 4.71m7.5 7.79c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5m-5 0c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5m2.5.94c-.25.25-.54.45-.85.62c.1 1.87.26 4 .52 5.93h2.67c-.39-1.86-.54-3.82-.57-5.58c-.69-.14-1.3-.48-1.77-.97" opacity=".3"/><path fill="#65a30d" d="M12 2S7 7 1 9v2c0 1.49.93 2.75 2.24 3.26C3.2 16.76 2.92 19.69 2 22h20c-.92-2.31-1.2-5.24-1.24-7.74A3.5 3.5 0 0 0 23 11V9c-6-2-11-7-11-7m0 2.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71M3 11h3c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11m4.33 9H4.66c.39-1.86.54-3.82.57-5.58c.68-.15 1.29-.49 1.76-.98c.25.25.54.45.85.62c-.08 1.87-.24 4-.51 5.94M8 11h3c0 .83-.67 1.5-1.5 1.5S8 11.83 8 11m1.35 9c.24-1.83.39-3.78.48-5.53c.84-.08 1.61-.45 2.17-1.02c.56.57 1.32.94 2.17 1.02c.1 1.75.24 3.7.48 5.53zm5.15-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m2.17 7.5c-.27-1.94-.43-4.07-.52-5.93c.31-.17.61-.37.85-.62c.47.48 1.08.83 1.76.98c.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5"/></svg>} />
            <CardSesion3 IMG={ser2} text="•	SUBASTA GANADERAS SEMANALES" svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><defs><mask id="IconifyId197af2e48d25b91c01"><g fill="none"><path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11.075 37.08c-3.386 1.46-5.039 3.444-5.71 4.83c-.266.548.181 1.09.79 1.09h21.232c.742 0 1.212-.776.779-1.38c-1.75-2.438-4.384-3.977-5.777-4.552a.9.9 0 0 0-.357-.068h-10.57a1 1 0 0 0-.387.08"/><path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="m14.732 18.856l5-8.66l8.66 5l-5 8.66z"/><path fill="#fff" d="m27.392 16.928l1-1.732a2 2 0 0 0-2.732.732zm-3 5.196l-1.732-1a2 2 0 0 0 .732 2.732zm2-3.464l12.99 7.5l2-3.464l-12.99-7.5zm11.99 9.232l-12.99-7.5l-2 3.464l12.99 7.5zm-12.258-4.768l3-5.196l-3.464-2l-3 5.196zm13.625 4.402a1 1 0 0 1-1.367.366l-2 3.464a5 5 0 0 0 6.83-1.83zm-.367-1.366a1 1 0 0 1 .367 1.366l3.464 2a5 5 0 0 0-1.83-6.83z"/><rect width="14" height="6" x="21" y="4" fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3" transform="rotate(30 21 4)"/><rect width="14" height="6" x="13" y="17.856" fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3" transform="rotate(30 13 17.856)"/></g></mask></defs><path fill="#65a30d" d="M0 0h48v48H0z" mask="url(#IconifyId197af2e48d25b91c01)"/></svg>} />
            <CardSesion3 IMG={ser3} text="•	ALQUILER DE LAS INSTALACIONES" svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#65a30d" d="m16.561 10.368l8.753 12.063c.496.681.025 1.656-.8 1.656H7.477c-.827 0-1.297-.975-.801-1.657l8.763-12.063a.688.688 0 0 1 1.122.001M16 22.078a3 3 0 1 0 0-6a3 3 0 0 0 0 6m15.794 2.373c.5.666.03 1.627-.797 1.627h-.043a1 1 0 0 1-.8-.402L28.93 24.03h.017l-2.28-3.036L17.46 8.731l-1-1.33a.578.578 0 0 0-.921 0l-1 1.33l-9.206 12.263l-2.28 3.035h.017l-1.225 1.645a1 1 0 0 1-.8.403h-.042c-.828 0-1.298-.96-.797-1.627l1.249-1.665l2.28-3.036L12.943 7.49l1.459-1.944l.898-1.195a.876.876 0 0 1 1.4 0l.898 1.196l1.459 1.943l2.939 3.914V9.11c0-.57.448-1.031 1-1.031H25c.553 0 1 .461 1 1.03v7.626l2.266 3.015l2.28 3.037z"/></svg>} />
            <CardSesion3 IMG={ser5} text="•	ZONA DE PARQUEADERO" svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="#65a30d" d="M256 44.158L19.76 165.816L32 173.937l224-112l224 112l12.24-8.12L256 44.157zm0 37.904l-215 107.5V495h30V203h370v292h30V189.562zM92 223v18h328v-18zm0 36v18h328v-18zm100 36c-8.5 0-14.393 5.524-18.95 11.6s-8.276 13.701-11.478 22.24c-4.27 11.389-7.54 24.334-9.248 36.887c-8.722-2.235-22.048-4.431-24.324 2.273c-2.354 6.934 7.344 13.583 16.668 18.217c-.32 1.067-.63 2.17-.906 3.344C141.969 397.18 141 406.6 141 416s.969 18.82 2.762 26.44c1.272 5.406 3.108 9.766 4.744 12.56h214.988c1.636-2.794 3.472-7.154 4.744-12.56C370.031 434.82 371 425.4 371 416s-.969-18.82-2.762-26.44a57 57 0 0 0-.906-3.343c9.324-4.634 19.022-11.283 16.668-18.217c-2.276-6.704-15.602-4.508-24.324-2.273c-1.707-12.553-4.977-25.498-9.248-36.887c-3.202-8.539-6.922-16.165-11.479-22.24C334.393 300.524 328.5 295 320 295zm0 18h128c-.5 0 1.607.476 4.55 4.4c2.944 3.925 6.224 10.299 9.022 17.76c3.673 9.795 6.488 21.437 8.028 32.414C318.195 361.125 292.18 361 256 361s-62.195.125-85.6 6.574c1.54-10.977 4.355-22.62 8.028-32.414c2.798-7.461 6.078-13.835 9.021-17.76c2.944-3.924 5.051-4.4 4.551-4.4m-16 87a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m160 0a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-183 73v22h30v-22zm176 0v22h30v-22z"/></svg>} />
          </div>
        </div>
      </div>
       {/* --------- sesion #5 ---------- */}
        <div className='flex flex-col items-center mt-20'>
            <p className='text-base-verde font-bold text-4xl mt-6'>Nuestros Aliados</p>
            <div className="w-full flex justify-around overflow-x-auto">
                  <div className='flex w-max h-[200px] gap-10 mt-10 px-4 py-6 mb-10'>
                    <img className='w-full' src={riendas} alt="" />
                    <img className='w-fill' src={fidegan} alt="" />
                    <img className='w-fill' src={subagan} alt="" />
                    <img className='w-fill' src={ovicer} alt="" />
                  </div>
            </div>
        </div>
    </>
  )
}

export default App
