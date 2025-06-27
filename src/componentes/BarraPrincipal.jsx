import React from 'react'
import logo from "../IMGS/Logo_VERDE.png"

export const BarraPrincipal = () => {
  return (
    <div className='flex justify-around items-center mt-5 mb-5'>
      <div className='flex items-center flex-col w-[80px]'>
        <img src={logo} alt="" />
        <p className='text-[#558C31] font-extrabold'>CORFEDUPAR</p>
      </div>
      <div className='hidden sm:hidden md:flex gap-10'>
        <p className='font-medium lineaVerde cursor-pointer'>Quienes Somos</p>
        <p className='font-medium lineaVerde cursor-pointer'>Servicios </p>
        <p className='font-medium lineaVerde cursor-pointer'>Junta Directiva</p>
      </div>
      <div className='bg-base-verde gap-5 items-center hover:shadow-md cursor-pointer hover:shadow-[#5e7b27] duration-300 px-5 py-3 sm:px-5 sm:py-3 md:px-10 lg:px-12 rounded-full hidden sm:hidden md:flex'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#ffffff" d="M2 7.25A3.25 3.25 0 0 1 5.25 4h21.5A3.25 3.25 0 0 1 30 7.25v6.873l-.134-.064l-.515-.238a3.5 3.5 0 0 0-1.351-.32V7.25C28 6.56 27.44 6 26.75 6H5.25C4.56 6 4 6.56 4 7.25v17.5c0 .69.56 1.25 1.25 1.25H8v-3.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.748l-.707-.185a2.98 2.98 0 0 0-3.03.96l-.936 1.109A3.5 3.5 0 0 0 18.552 28H5.25A3.25 3.25 0 0 1 2 24.75zM16 18a5 5 0 1 0 0-10a5 5 0 0 0 0 10m9.55-.287l.479-1.378a1.97 1.97 0 0 1 2.693-1.152l.515.238c.84.387 1.544 1.081 1.68 2.003c.672 4.515-2.881 10.76-7.07 12.427c-.855.34-1.8.07-2.55-.475l-.46-.334a2.03 2.03 0 0 1-.364-2.942l.937-1.11c.368-.436.95-.62 1.503-.476l2.021.53q2.292-1.498 2.424-4.26l-1.463-1.512a1.53 1.53 0 0 1-.345-1.56" /></svg>
        <p className=' text-white font-bold'>Contacto</p>
      </div>
      <div className='sm:flex md:hidden'>

        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#558C31" d="M19 17H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2m0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2m0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2" /></svg></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sideba" className="drawer-overlay"></label>
            <div className="menu flex flex-col gap-5 bg-white text-black min-h-full w-70 p-4">
              {/* Sidebar content here */}
              <p className='font-medium lineaVerde cursor-pointer'>Quienes Somos</p>
              <p className='font-medium lineaVerde cursor-pointer'>Servicios </p>
              <p className='font-medium lineaVerde cursor-pointer'>Junta Directiva</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
