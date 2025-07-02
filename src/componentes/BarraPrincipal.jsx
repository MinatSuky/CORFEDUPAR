import React, { useState } from 'react'
import logoBlanco from "../IMGS/Logo_png.png"
import { Link } from 'react-router-dom'
import Formulario from './Formulario';

export const BarraPrincipal = () => {

const [boton, setBoton] = useState(false);
const abritPopap = () => setBoton(true)
const cerrarPopap = () => setBoton(false)

  return (
    <div className='flex flex-col'>
      {boton && (
      <div className=' fixed h-[100vh] w-full flex justify-center items-center backdrop-blur-sm z-20'>
        <div className='flex relative justify-center items-center py-8 bg-white border-2 border-emerald-700 rounded-2xl z-20'>
          <p onClick={cerrarPopap} className='absolute cursor-pointer top-[4%] right-[5%]'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75l-1.48 1.48L6 9.48l-3.75 3.75l-1.48-1.48L4.52 8L.77 4.25l1.48-1.48L6 6.52l3.75-3.75l1.48 1.48L7.48 8z" fill="#000000"/></svg></p>
          <Formulario/>
      </div>  
      </div>     
      )}
      
      <div className='fixed z-10 w-full flex justify-around items-center bg-base-verde'>
        <div className='flex gap-4 items-center py-2'>
          <div className='flex flex-col items-center'>
            <img className='drop-shadow-xl w-[80px]' src={logoBlanco} alt="" />
            <p className='text-white  font-extrabold text-shado'>CORFEDUPAR</p>
          </div>
          <div className='lg:flex hidden flex-col justify-end'>
            <p className='font-bold numero-fuente text-white textNumer text-5xl text-shado p-0'>44°</p>
            <p className='text-3xl font-bold text-white text-shado feria flex flex-col'>Feria <span>Ganadera</span> </p>
          </div>
          <div className='hidden lg:flex flex-col items-center justify-center'>
            <p className='flex gap-1.5 items-end text-shado numero-fuente'><span className='text-5xl font-bold text-white'>15</span><span className='text-3xl font-bold feria text-white'>al</span><span className='text-5xl font-bold text-white'>17</span></p>
            <p className='text-4xl shadoow font-bold text-white bg-base-naranja p-2 feria flex items-center gap-1 text-shado rounded-md'><span className='text-xl font-bold text-white'>de</span>Agosto</p>
          </div>
        </div>



        <div className='flex gap-5'>
          <a href="#formulario" className='bg-white gap-5 items-center shadoow cursor-pointer duration-300 px-5 py-3 sm:px-5 sm:py-3 md:px-10 lg:px-12 rounded-full hidden sm:hidden md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#ea5f28" d="M1 1h18v12l-6 6H1zm3 3v1h12V4zm0 4v1h12V8zm6 5v-1H4v1zm2 4l5-5h-5z" /></svg>
            <p onClick={abritPopap} className='text-base-naranja font-bold feria'>Registrate Aquí!</p>
          </a>
         <Link to={'/Valores'}> <button className='cursor-pointer shadoow items-center text-[10px] md:text-[14px] flex gap-3 md:bottom-[5%] bottom-[2%] rounded-full px-5 py-1 md:px-10 md:py-3 left-[41%] shadow-2xl text-shado md:left-[24%] bg-base-naranja text-white feria font-bold'>VALORES COMERCIALES <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#ffffff" fill-rule="evenodd" d="M213.304 128h42.654V42.667h-42.654zM42.688 256h85.308v-42.666H42.688zm101.466-81.674L83.84 113.974l30.156-30.166l60.313 60.352zm-30.159 211.187l-30.156-30.165l60.312-60.352l30.157 30.165zM325.12 174.326l-30.157-30.166l60.313-60.352l30.157 30.166zM270.933 464l-80.707-273.873L464 270.934l-62.72 62.72l59.733 59.52l-67.84 67.84l-59.52-59.734z" /></svg></span></button></Link>
        </div>

      </div>
      <div className='bg-base-verde-oscuro w-full flex top-[115px] lg:top-[135px] shadow-2xl fixed z-10 justify-around items-center'>
        <div className='redes-sociales flex items-center gap-2'>
          <a href='https://www.facebook.com/corfedupar.feriaganadera/' className='border w-full border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M13.355 22v-9.123h3.062l.459-3.555h-3.52v-2.27c0-1.03.285-1.731 1.761-1.731L17 5.32V2.14A25 25 0 0 0 14.257 2c-2.715 0-4.573 1.657-4.573 4.7v2.622h-3.07v3.555h3.07V22z" /></svg>
          </a>
          <a href='https://www.instagram.com/corfedupar_oficial/' className='border border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
          </a>
        </div>
        <div className='hidden md:flex gap-10 items-center text-white feria font-bold text-shado'>
          <Link to={'/'}><p className='font-medium lineaVerde cursor-pointer'>INICIO</p></Link>

          <div className="dropdown  dropdown-hover">
            <div tabIndex={0} role="button" className="lineaVerde cursor-default bg-[#015811] text-white m-1">SOBRE LA FERIA</div>
            <ul tabIndex={0} className="dropdown-content menu bg-white text-black rounded-box z-1 w-52 p-2">
              <Link to={'/PageCORFEDUPAR'}> <li className='px-2 py-2 cursor-pointer font-normal'>CORFEDUPAR</li></Link>
              <Link to={'/PageORGANIGRAMA'}> <li className='px-2 py-2 cursor-pointer font-normal'>ORGANIGRAMA</li></Link>
              <Link to={'/PagePORTAFOLIO'}> <li className='px-2 py-2 cursor-pointer font-normal'>PORTAFOLIO</li></Link>
            </ul>
          </div>
          <div className="dropdown  dropdown-hover">
            <div tabIndex={0} role="button" className="lineaVerde cursor-default bg-[#015811] text-white m-1">EXPOSITOR</div>
            <div tabIndex={0} className="dropdown-content menu bg-white text-black  rounded-box z-1 w-52 p-2">
              <Link to={'/PageEXPOSITOR'}>  <p className='px-2 py-2 cursor-pointer font-normal'>PERFIL EXPOSITOR</p> </Link>
              <Link to={'/PageBENEFICIOS'}>  <p className='px-2 py-2 cursor-pointer font-normal'>BENEFICIOS DEL EXPOSITOR</p> </Link>
            </div>
          </div>
        </div>
        <div className='sm:flex md:hidden'>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="M19 17H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2m0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2m0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2" /></svg></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sideba" className="drawer-overlay"></label>
              <div className="menu flex flex-col gap-5 bg-white text-black min-h-full w-70 p-4">
                {/* Sidebar content here */}
                <Link to={'/'}><p className='font-bold mt-10 lineaVerde cursor-pointer'>INICIO</p></Link>
                <p className='font-bold lineaVerde cursor-pointer'>SOBRE LA FERIA</p>
                <hr />
                <Link to={'/PageCORFEDUPAR'}> <li className='px-2 py-2 cursor-pointer font-normal'>CORFEDUPAR</li></Link>
                <Link to={'/PageORGANIGRAMA'}> <li className='px-2 py-2 cursor-pointer font-normal'>ORGANIGRAMA</li></Link>
                <Link to={'/PagePORTAFOLIO'}> <li className='px-2 py-2 cursor-pointer font-normal'>PORTAFOLIO</li></Link>
                <p className='font-bold lineaVerde cursor-pointer'>EXPOSITOR </p>
                <hr />
                <Link to={'/PageEXPOSITOR'}>  <p className='px-2 py-2 cursor-pointer font-normal'>PERFIL EXPOSITOR</p> </Link>
                <Link to={'/PageBENEFICIOS'}>  <p className='px-2 py-2 cursor-pointer font-normal'>BENEFICIOS DE EXPOSIYOR</p> </Link>
                <a href="#formulario" className='bg-white gap-5 items-center shadoow cursor-pointer duration-300 px-5 py-3 sm:px-5 sm:py-3 md:px-10 lg:px-12 rounded-full mt-20 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#ea5f28" d="M1 1h18v12l-6 6H1zm3 3v1h12V4zm0 4v1h12V8zm6 5v-1H4v1zm2 4l5-5h-5z" /></svg>
                  <p onClick={abritPopap} className='text-base-naranja font-bold feria'>Registrate Aquí!</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
