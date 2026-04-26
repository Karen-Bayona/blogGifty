const mongoose = require('mongoose');

const ArticuloSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    categoria: { type: String, enum: ['Moda', 'Salud', 'Tecnología', 'Bienestar'], default: 'Bienestar' },
    autor: { type: String, default: 'Equipo Ensigna' },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Articulo', ArticuloSchema);