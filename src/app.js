const express = require('express');
const mongoose = require('mongoose');
const authRutas = require('./rutas/authRutas');
require('dotenv').config();

const app = express();
// Para que el servidor entienda datos en formato JSON
app.use(express.json());
app.use('/api/auth', authRutas);
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