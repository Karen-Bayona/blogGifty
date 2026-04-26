const mongoose = require('mongoose');

const GadgetSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true }, 
    categoria: { type: String, default: 'Bienestar' }, 
    linkCompra: { type: String },
    imagen: { type: String, default: 'https://i.pinimg.com/736x/15/73/78/157378aa5e8dde9dbc78bba16a4f3081.jpg' }, 
    stock: { type: Number, default: 0 }, 
    calificacion: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Gadget', GadgetSchema);