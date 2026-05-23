const express = require('express');
const mongoose = require('mongoose');

// 1. Importación de Rutas
const authRutas = require('./rutas/authRutas');
const articuloRoutes = require('./rutas/articuloRoutes'); 
const gadgetRoutes = require('./rutas/gadgetRutas'); // <-- INTEGRADO: Tus rutas de gadgets
const errorMiddleware = require('./middlewares/errorMiddleware');

const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express(); // Inicializamos la app

// 2. Middlewares de seguridad y formato 
app.use(helmet());

// CORREGIDO: Permiso explícito para que tu Angular (puerto 4200) consulte sin bloqueos
app.use(cors({ 
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
}));

app.use(express.json()); 

// 3. Conexión a la Base de Datos (Usa las variables de tu nuevo .env)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// 4. Definición de Endpoints de la API
app.use('/api/auth', authRutas);
app.use('/api/articulo', articuloRoutes);
app.use('/api/gadgets', gadgetRoutes); // <-- INTEGRADO: Endpoint público para el CRUD de gadgets

// 5. Ruta raíz de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenida a la API de Gifty');
});

// 6. Manejo global de errores 
app.use(errorMiddleware);

// 7. Encender el servidor backend
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en: http://localhost:${PORT}`);
});