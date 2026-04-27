const express = require('express');
const mongoose = require('mongoose');
const authRutas = require('./rutas/authRutas');
const articuloRoutes = require('./rutas/articuloRoutes'); 
const errorMiddleware = require('./middlewares/errorMiddleware');
// ... resto del código igual
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express(); // 1. Primero inicializamos la app

// 2. Middlewares de seguridad y formato 
app.use(helmet());
app.use(cors());
app.use(express.json()); 

// 3. Conexión a la Base de Datos
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// 4. Definición de Rutas
app.use('/api/auth', authRutas);
app.use('/api/articulo', articuloRoutes);

// 5. Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenida a la API de Gifty');
});

// 6. Manejo de errores 
app.use(errorMiddleware);

// 7. Encender servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en: http://localhost:${PORT}`);
});