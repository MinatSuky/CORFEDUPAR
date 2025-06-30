import React from 'react'
import logo from "../IMGS/Logo_VERDE.png"
import logoBlanco from "../IMGS/Logo_png.png"
import { Link } from 'react-router-dom'

export const BarraPrincipal = () => {
  return (
    <div className='flex flex-col'>
      <div className='fixed z-10 w-full flex justify-around items-center bg-base-verde'>
        <div className='flex gap-4 items-center py-2'>
          <div className='flex flex-col items-center'>
            <img className='drop-shadow-xl w-[80px]' src={logoBlanco} alt="" />
            <p className='text-white  font-extrabold text-shado'>CORFEDUPAR</p>
          </div>
          <div className='flex flex-col justify-end'>
            <p className='font-bold numero-fuente text-white textNumer text-5xl text-shado p-0'>44°</p>
            <p className='text-3xl font-bold text-white text-shado feria flex flex-col'>Feria <span>Ganadera</span> </p>
          </div>
          <div className='hidden sm:flex flex-col items-center justify-end'>
            <p className='flex gap-1.5 items-end text-shado numero-fuente'><span className='text-5xl font-bold text-white'>15</span><span className='text-3xl font-bold feria text-white'>al</span><span className='text-5xl font-bold text-white'>17</span></p>
            <p className='text-4xl font-bold text-white bg-base-naranja p-2 feria flex items-center gap-1 text-shado rounded-md'><span className='text-xl font-bold text-white'>de</span>Agosto</p>
          </div>
        </div>

        <a href="#formulario" className='bg-white gap-5 items-center shadoow cursor-pointer duration-300 px-5 py-3 sm:px-5 sm:py-3 md:px-10 lg:px-12 rounded-full hidden sm:hidden md:flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#ea5f28" d="M1 1h18v12l-6 6H1zm3 3v1h12V4zm0 4v1h12V8zm6 5v-1H4v1zm2 4l5-5h-5z" /></svg>
          <p className='text-base-naranja font-bold feria'>Registrate Aqui!</p>
        </a>


      </div>
      <div className='bg-base-verde-oscuro w-full flex top-[135px] shadow-2xl fixed z-10 justify-around items-center'>
        <div className='redes-sociales flex items-center gap-2'>
          <a href='https://www.facebook.com/corfedupar.feriaganadera/' className='border w-full border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M13.355 22v-9.123h3.062l.459-3.555h-3.52v-2.27c0-1.03.285-1.731 1.761-1.731L17 5.32V2.14A25 25 0 0 0 14.257 2c-2.715 0-4.573 1.657-4.573 4.7v2.622h-3.07v3.555h3.07V22z" /></svg>
          </a>
          <a href='https://www.instagram.com/corfedupar_oficial/' className='border border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
          </a>
          <p className='border border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#ffffff" d="M215 219.85a8 8 0 0 1-7 4.15h-48a8 8 0 0 1-6.75-3.71l-40.49-63.63l-58.84 64.72a8 8 0 0 1-11.84-10.76l61.77-68l-62.6-98.32A8 8 0 0 1 48 32h48a8 8 0 0 1 6.75 3.71l40.49 63.63l58.84-64.72a8 8 0 0 1 11.84 10.76l-61.77 67.95l62.6 98.38a8 8 0 0 1 .25 8.14" /></svg>
          </p>
          <p className='border border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" /></svg>
          </p>
          <p className='border border-white rounded-full py-1 px-1 md:py-3 md:px-3 my-3 shadoow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#ffffff" d="M8.3 1.01c.75-.01 1.5 0 2.25-.01c.05.89.36 1.8 1.01 2.43c.64.65 1.55.94 2.44 1.04v2.35c-.83-.03-1.66-.2-2.42-.56c-.33-.15-.63-.34-.93-.54c0 1.7 0 3.41-.01 5.1c-.04.82-.31 1.63-.78 2.3c-.75 1.12-2.06 1.85-3.4 1.87c-.82.05-1.65-.18-2.35-.6c-1.16-.69-1.98-1.97-2.1-3.33q-.03-.435 0-.87c.1-1.11.65-2.17 1.49-2.89c.95-.84 2.29-1.24 3.54-1c.01.86-.02 1.73-.02 2.59c-.57-.19-1.24-.13-1.74.22c-.37.24-.64.6-.79 1.02c-.12.3-.09.62-.08.94c.14.96 1.05 1.76 2.01 1.67c.64 0 1.26-.39 1.59-.94c.11-.19.23-.39.24-.62c.06-1.04.03-2.08.04-3.13c0-2.35 0-4.7.01-7.04"/></svg>
          </p>
        </div>
        <div className='hidden md:flex gap-10 items-center text-white feria font-bold text-shado'>
          <Link to={'/'}><p className='font-medium lineaVerde cursor-pointer'>INICIO</p></Link>
          
          <div className="dropdown  dropdown-hover">
            <div tabIndex={0} role="button" className="lineaVerde cursor-default bg-[#015811] text-white m-1">SOBRE LA FERIA</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-black  rounded-box z-1 w-52 p-2">             
              <Link to={'/PageCORFEDUPAR'}> <li className='px-2 py-2 cursor-pointer font-normal'>CORFEDUPAR</li></Link>             
             <Link to={'/PageORGANIGRAMA'}> <li className='px-2 py-2 cursor-pointer font-normal'>ORGANIGRAMA</li></Link>
            </ul>
          </div>
          <div className="dropdown  dropdown-hover">
            <div tabIndex={0} role="button" className="lineaVerde cursor-default bg-[#015811] text-white m-1">SOY EXPOSITOR</div>
            <div tabIndex={0} className="dropdown-content menu bg-base-100 text-black  rounded-box z-1 w-52 p-2">
            <Link to={'/PageEXPOSITOR'}>  <p className='px-2 py-2 cursor-pointer font-normal'>PERFIL EXPOSITOR</p> </Link>
            <Link to={'/PageBENEFICIOS'}>  <p className='px-2 py-2 cursor-pointer font-normal'>BENEFICIOS DE EXPOSIYOR</p> </Link>
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
                <p className='font-medium lineaVerde cursor-pointer mt-10'>SOBRE LA FERIA</p>
                <p className='font-medium lineaVerde cursor-pointer'>SOY EXPOSITOR </p>
                <a href="#formulario" className='bg-white gap-5 items-center shadoow cursor-pointer duration-300 px-5 py-3 sm:px-5 sm:py-3 md:px-10 lg:px-12 rounded-full mt-20 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#ea5f28" d="M1 1h18v12l-6 6H1zm3 3v1h12V4zm0 4v1h12V8zm6 5v-1H4v1zm2 4l5-5h-5z" /></svg>
                  <p className='text-base-naranja font-bold feria'>Registrate Aqui!</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
