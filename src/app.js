const express = require('express');
const mongoose = require('mongoose');
const authRutas = require('./rutas/authRutas');
const errorMiddleware = require('./middlewares/errorMiddleware');
const helmet = require('helmet');
const articuloRoutes = require('./routes/articuloRoutes');
const gadgetRoutes = require('./routes/gadgetRoutes');
const cors = require('cors');
require('dotenv').config();




app.use('/api/articulos', articuloRoutes);
app.use('/api/gadgets', gadgetRoutes);

//Seguridad de Infraestructura
app.use(helmet()); // Ayuda a proteger de ataques web conocidos 
app.use(cors());   // Permite que aplicaciones externas se conecten

conectarDB();
app.use(express.json());

const app = express();

// Para que el servidor entienda datos en formato JSON
app.use(express.json());

// Verificar que el servidor funciona
app.use('/api/auth', authRutas);

app.use(errorMiddleware);

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