import React from 'react'
import logoBlanco from "../IMGS/Logo_png.webp"

const Footer = () => {
  return (
    <footer className='bg-base-verde flex flex-col pt-10 mt-36'>
        <div className='flex justify-around gap-[10%] mx-5 items-center'>
          <div className='flex flex-col items-center'>
            <img className='drop-shadow-xl w-[40px] md:w-[80px]' src={logoBlanco} alt="" />
            <p className='text-white  font-extrabold text-shado'>CORFEDUPAR</p>
          </div>
          <div>
            <div className='flex gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18q.371.465.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.4 3.4 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05zM14.661.436l-3.838 4.563l.027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.38 8.38 0 0 0 14.67.439zM9.466 5.868L14.162.285l-.047-.012A8.3 8.3 0 0 0 11.986 0a8.44 8.44 0 0 0-6.169 2.766l-.016.018z" /></svg>
              <p className='text-[10px] md:text-[15px] text-white'>CRA 7ª KM 5 VIA LA PAZ - COLISEO DE FERIAS PEDRO CASTRO MONSALVO.</p>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#ffffff" d="M15 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1M4.94 9.94l-3 3c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.63.63 0 0 1 0-.88l3-3c.24-.24.64-.24.88 0c.25.24.25.64 0 .88m10 3c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-3-3a.63.63 0 0 1 0-.88c.24-.24.64-.24.88 0l3 3c.25.24.25.64 0 .88m0-9L8.8 10.09c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L1.06 3.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L8 9.12l6.06-6.06c.24-.24.64-.24.88 0c.25.24.25.64 0 .88" /></svg>
              <p className='text-[10px] md:text-[15px] text-white'>corfedupar@yahoo.com</p>
            </div>
          </div>
        </div>
        <p className='text-white px-10 text-center mt-5'>
          Lugar del evento: Valledupar-Cesar, Colombia / Tipo del evento: Feria agropecuaria / Fecha del evento: Del 15 al 17 de Agosto de 2025 / Horario del evento para visitantes: 10:00 a.m. a 8:00 p.m. / CORFEDUPAR. Los organizadores de la feria no se hacen responsables de ninguna negociación.
        </p>
        <hr className='my-5 text-white font-bold'></hr>
        <aside>
          <p className='text-white text-center'>Copyright © {new Date().getFullYear()} CORFEDUPAR - Todos los derechos reservados</p>
        </aside>
      </footer>
  )
}

export default Footer
