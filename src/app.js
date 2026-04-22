const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
// Para que el servidor entienda datos en formato JSON
app.use(express.json());
// Verificar que el servidor funciona

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

app.get('/', (req, res) => {
    res.send('Bienvenida a la API de Gifty');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor activo en: http://localhost:${PORT}`);
});