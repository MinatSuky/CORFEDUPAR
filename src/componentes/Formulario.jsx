import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Formulario = () => {

    const [enviando, setEnviando] = useState(false);
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

        if (enviando) return; // Previene múltiples envíos
        setEnviando(true);

        const nuevoRegistro = {
            Tipo: tipoPersona === 'normal' ? 'Persona Natural' : 'Persona Jurídica',
            Nombre_o_Razon_Social: formData.nombre,
            Cedula_o_NIT: formData.documento,
            Telefono: formData.telefono,
            Correo: formData.correo,
        };

        try {
            await fetch('/api/registro.js', {
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
        } finally {
            // Evita que el botón quede desactivado por siempre
            setTimeout(() => setEnviando(false), 3000); // 3 segundos de espera
        }
    };




    const botonActivo = 'bg-[#015811] text-sm lg:text-lg text-white px-5 py-3 rounded-md font-bold';
    const botonInactivo = 'border text-sm lg:text-lg border-[#015811] text-[#015811] px-5 font-bold py-3 rounded-md bg-transparent cursor-pointer';

    return (
        <div id="formulario" className='contenedor mt-10'>
            <p className='mx-2 lg:mx-10 text-[#015811] mb-10 text-3xl font-bold'>Registrate Aquí!</p>
            <div className="opciones flex gap-2 mx-10">
                <button
                    className={tipoPersona === 'normal' ? botonActivo : botonInactivo}
                    onClick={() => setTipoPersona('normal')}
                >
                    Persona Natural
                </button>
                <button
                    className={tipoPersona === 'juridica' ? botonActivo : botonInactivo}
                    onClick={() => setTipoPersona('juridica')}
                >
                    Persona Jurídica
                </button>
            </div>

            <form onSubmit={handleSubmit} className="mx-2 lg:mx-10 mt-6 grid gap-4 max-w-[100%] ">
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

                <label className="text-[10px] md:text-[14px] mt-4 flex items-start gap-2">
                    <input type="checkbox" required className="mt-1" />
                    Acepto los <Link to={'/Terminos'} className="text-green-700 underline">términos y condiciones</Link> para el uso de mis datos personales.
                </label>


                <button
                    type="submit"
                    disabled={enviando}
                    className={`mt-4 font-bold cursor-pointer py-2 px-4 rounded-md transition 
    ${enviando
                            ? 'bg-[#015811] flex justify-center cursor-progress'
                            : 'bg-[#015811] text-white hover:bg-green-700'}`}
                >
                    {enviando ? (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="#ffffff" rx="1"><animate id="IconifyId197c96d26d2c6bc71171" fill="freeze" attributeName="x" begin="0;IconifyId197c96d26d2c6bc71182.end" dur="0.2s" values="1;13"/><animate id="IconifyId197c96d26d2c6bc71172" fill="freeze" attributeName="y" begin="IconifyId197c96d26d2c6bc71179.end" dur="0.2s" values="1;13"/><animate id="IconifyId197c96d26d2c6bc71173" fill="freeze" attributeName="x" begin="IconifyId197c96d26d2c6bc71180.end" dur="0.2s" values="13;1"/><animate id="IconifyId197c96d26d2c6bc71174" fill="freeze" attributeName="y" begin="IconifyId197c96d26d2c6bc71181.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="#ffffff" rx="1"><animate id="IconifyId197c96d26d2c6bc71175" fill="freeze" attributeName="y" begin="IconifyId197c96d26d2c6bc71171.end" dur="0.2s" values="13;1"/><animate id="IconifyId197c96d26d2c6bc71176" fill="freeze" attributeName="x" begin="IconifyId197c96d26d2c6bc71172.end" dur="0.2s" values="1;13"/><animate id="IconifyId197c96d26d2c6bc71177" fill="freeze" attributeName="y" begin="IconifyId197c96d26d2c6bc71173.end" dur="0.2s" values="1;13"/><animate id="IconifyId197c96d26d2c6bc71178" fill="freeze" attributeName="x" begin="IconifyId197c96d26d2c6bc71174.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="#ffffff" rx="1"><animate id="IconifyId197c96d26d2c6bc71179" fill="freeze" attributeName="x" begin="IconifyId197c96d26d2c6bc71175.end" dur="0.2s" values="13;1"/><animate id="IconifyId197c96d26d2c6bc71180" fill="freeze" attributeName="y" begin="IconifyId197c96d26d2c6bc71176.end" dur="0.2s" values="13;1"/><animate id="IconifyId197c96d26d2c6bc71181" fill="freeze" attributeName="x" begin="IconifyId197c96d26d2c6bc71177.end" dur="0.2s" values="1;13"/><animate id="IconifyId197c96d26d2c6bc71182" fill="freeze" attributeName="y" begin="IconifyId197c96d26d2c6bc71178.end" dur="0.2s" values="1;13"/></rect></svg>) : 'Enviar'}
                </button>

            </form>
        </div>
    );
};

export default Formulario;
