// api/registrar.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const data = req.body;

    const response = await fetch("https://script.google.com/macros/s/AKfycbw10c_aL7klhgV0RIdfeLKTagOe4PeykXeWmptsFpn1wZcToLl_bNoTUWcx47QaDIy_fA/exec", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    return res.status(200).json({ message: "Registro enviado correctamente", result });
  } catch (error) {
    return res.status(500).json({ message: "Error al enviar los datos", error: error.message });
  }
}
