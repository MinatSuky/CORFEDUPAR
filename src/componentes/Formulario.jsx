import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Formulario = () => {
    const [tipoPersona, setTipoPersona] = useState('normal');
    const [mensaje, setMensaje] = useState('');
    const [enviando, setEnviando] = useState(false);
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

        setEnviando(true);
        setMensaje('');

        const form = new FormData();
        form.append('Tipo', tipoPersona === 'normal' ? 'Persona Natural' : 'Persona Jurídica');
        form.append('Nombre_o_Razon_Social', formData.nombre);
        form.append('Cedula_o_NIT', formData.documento);
        form.append('Telefono', formData.telefono);
        form.append('Correo', formData.correo);
        form.append('_captcha', 'false');
        form.append('_template', 'table');

        try {
            const res = await fetch('https://formsubmit.co/gomezbuzon05@gmail.com', {
                method: 'POST',
                body: form
            });

            if (res.ok) {
                setMensaje('✅ Datos enviados correctamente.');
                setFormData({ nombre: '', documento: '', telefono: '', correo: '' });
            } else {
                setMensaje('❌ Error al enviar los datos.');
            }
        } catch (error) {
            console.error(error);
            setMensaje('❌ Error al enviar los datos.');
        } finally {
            setEnviando(false);
            setTimeout(() => setMensaje(''), 3000); 
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
                    onClick={(e) => { e.preventDefault(); setTipoPersona('normal'); }}
                >
                    Persona Natural
                </button>
                <button
                    className={tipoPersona === 'juridica' ? botonActivo : botonInactivo}
                    onClick={(e) => { e.preventDefault(); setTipoPersona('juridica'); }}
                >
                    Persona Jurídica
                </button>
            </div>

            <form onSubmit={handleSubmit} className="mx-2 lg:mx-10 mt-6 grid gap-4 max-w-[100%]">
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

                {mensaje && (
                    <div className={`text-sm font-semibold ${mensaje.includes('✅') ? 'text-green-700' : 'text-red-600'}`}>
                        {mensaje}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={enviando}
                    className="mt-4 font-bold cursor-pointer bg-[#015811] text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default Formulario;