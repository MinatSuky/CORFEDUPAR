import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Formulario = () => {
    const [tipoPersona, setTipoPersona] = useState('normal');
    const [formData, setFormData] = useState({
        nombre: '',
        documento: '',
        telefono: '',
        correo: ''
    });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

    const handleSubmit = async (e) => {
  e.preventDefault();

  const nuevoRegistro = {
    Tipo: tipoPersona === 'normal' ? 'Persona Natural' : 'Persona Jurídica',
    Nombre_o_Razon_Social: formData.nombre,
    Cedula_o_NIT: formData.documento,
    Telefono: formData.telefono,
    Correo: formData.correo,
  };

  try {
    await fetch('http://localhost:3001/api/registrar', {
      method: 'POST',
      body: JSON.stringify(nuevoRegistro),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    alert("Registro enviado correctamente");

    setFormData({
      nombre: '',
      documento: '',
      telefono: '',
      correo: ''
    });
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    alert("Hubo un error al enviar los datos");
  }
};

// function doGet(e) {
//   return ContentService.createTextOutput(JSON.stringify({ result: 'ok', metodo: 'GET' }))
//     .setMimeType(ContentService.MimeType.JSON);
// }


// function doPost(e) {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RegistroUsuarios");
//   var data = JSON.parse(e.postData.contents);

//   Logger.log("Datos recibidos: " + JSON.stringify(data));

//   sheet.appendRow([
//     data.Tipo,
//     data.Nombre_o_Razon_Social,
//     data.Cedula_o_NIT,
//     data.Telefono,
//     data.Correo,
//     new Date().toLocaleString()
//   ]);

//   return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
//     .setMimeType(ContentService.MimeType.JSON);
// }


    const botonActivo = 'bg-[#015811] text-sm lg:text-lg text-white px-5 py-3 rounded-md font-bold';
    const botonInactivo = 'border text-sm lg:text-lg border-[#015811] text-[#015811] px-5 font-bold py-3 rounded-md bg-transparent cursor-pointer';

    return (
        <div className='contenedor mt-10'>
            <p className='mx-2 lg:mx-10 text-[#015811] mb-10 text-3xl font-bold'>Registrate Aquí!</p>
            <div className="opciones flex gap-2 mx-10">
                <button
                    className={tipoPersona === 'normal' ? botonActivo : botonInactivo}
                    onClick={() => setTipoPersona('normal')}
                >
                    Persona Normal
                </button>
                <button
                    className={tipoPersona === 'juridica' ? botonActivo : botonInactivo}
                    onClick={() => setTipoPersona('juridica')}
                >
                    Persona Jurídica
                </button>
            </div>

            <form onSubmit={handleSubmit} className="mx-2 lg:mx-10 mt-6 grid gap-4 max-w-[100%] lg:max-w-[50%]">
                <div className='flex flex-col lg:flex-row gap-5 w-full'>
                    <div className='w-full'>
                        <label className="block mb-1 ml-3 font-semibold">
                            {tipoPersona === 'juridica' ? 'Razón Social' : 'Nombres'}
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full border border-green-800 rounded shadow-lg px-3 py-2 lg:py-4"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label className="block mb-1 ml-3 font-semibold">
                            {tipoPersona === 'juridica' ? 'NIT' : 'Cédula'}
                        </label>
                        <input
                            type="text"
                            name="documento"
                            value={formData.documento}
                            onChange={handleChange}
                            className="w-full border border-green-800 rounded shadow-lg px-3 py-2 lg:py-4"
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-5 w-full '>
                    <div className='w-full'>
                        <label className="block mb-1 ml-3 font-semibold">Teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full border border-green-800 rounded shadow-lg px-3 py-2 lg:py-4"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label className="block mb-1 ml-3 font-semibold">Correo</label>
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            className="w-full border border-green-800 rounded shadow-lg px-3 py-2 lg:py-4"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-4 font-bold cursor-pointer bg-[#015811] text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
