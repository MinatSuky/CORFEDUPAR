import React from 'react'
import Img from "../../src/IMGS/Desktop - 9.png"
import Img2 from "../../src/IMGS/Desktop - 10.png"

const Popap = ({ onClose }) => {
    return (
        <>
            <div className='z-40 fixed w-full flex justify-center h-[140vh] md:h-[100vh] bg-black/80 backdrop-blur-sm'>
                <div className='relative flex justify-center mx-5 mt-1 w-fit p-10'>
                    <img className='rounded-2xl hidden md:flex w-[100%]' src={Img} alt="" />
                    <img className='rounded-2xl flex md:hidden h-[70%]' src={Img2} alt="" />
                    <svg  onClick={onClose} className='absolute top-3 right-3' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0a10 10 0 0 1-20 0m7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3l-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3l2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6z" clip-rule="evenodd" /></svg>
                </div>
            </div>
        </>
    )
}

export default Popap
