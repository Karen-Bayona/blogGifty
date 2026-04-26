const mongoose = require('mongoose');

const ArticuloSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    resumen: { type: String, required: true }, 
    contenido: { type: String, required: true },
    categoria: { type: String, enum: ['Moda', 'Salud', 'Tecnología', 'Bienestar'], default: 'Bienestar' },
    autor: { type: String, default: 'Equipo Ensigna' },
    imagen: { type: String, default: 'https://i.pinimg.com/736x/15/73/78/157378aa5e8dde9dbc78bba16a4f3081.jpg' },
    fecha: { type: Date, default: Date.now}
});
module.exports = mongoose.model('Articulo', ArticuloSchema);
