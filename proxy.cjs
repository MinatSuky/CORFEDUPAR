const express = require('express');
const cors = require('cors');


const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Solo permite tu app React
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/registrar', async (req, res) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw10c_aL7klhgV0RIdfeLKTagOe4PeykXeWmptsFpn1wZcToLl_bNoTUWcx47QaDIy_fA/exec', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    res.json({ status: 'ok', result });
  } catch (err) {
    console.error('Error al reenviar a Apps Script:', err);
    res.status(500).json({ status: 'error', error: err.toString() });
  }
});

app.listen(3001, () => {
  console.log('✅ Proxy corriendo en http://localhost:3001');
});

