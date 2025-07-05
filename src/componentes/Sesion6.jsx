import React, { useState } from 'react';
import Foto1 from "../IMGS/galeria1.webp"
import Foto2 from "../IMGS/galeria2.webp"
import Foto3 from "../IMGS/galeria3.webp"
import Foto4 from "../IMGS/galeria4.webp"
import Foto5 from "../IMGS/galeria5.webp"
import Foto6 from "../IMGS/galeria6.webp"
import Foto7 from "../IMGS/galeria7.webp"
import Foto8 from "../IMGS/galeria8.webp"
import Foto9 from "../IMGS/galeria9.webp"
import Foto10 from "../IMGS/galeria10.webp"
import Foto11 from "../IMGS/galeria 11.webp"
import Foto12 from "../IMGS/galeria12.webp"

const images = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10, Foto11, Foto12];

const Sesion6 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mx-2 md:mx-10 mt-10 flex flex-col gap-3 lg:gap-10">
      {/* Mostrar galería */}
      {[0, 3, 6, 9].map((startIdx) => (
        <div key={startIdx} className='flex justify-center w-full gap-[2%] h-[100px] lg:h-[300px]'>
          {images.slice(startIdx, startIdx + 3).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagen ${startIdx + i + 1}`}
              onClick={() => setSelectedImage(img)}
              className='object-cover object-top w-[33%] rounded-md lg:rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition duration-300 ease-in-out'
            />
          ))}
        </div>
      ))}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen grande" className="rounded-xl shadow-2xl max-h-[90vh] max-w-full" />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sesion6;

