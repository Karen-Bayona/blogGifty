const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
// Para que el servidor entienda datos en formato JSON
app.use(express.json());
// Verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Bienvenida a la API de Gifty');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor activo en: http://localhost:${PORT}`);
});