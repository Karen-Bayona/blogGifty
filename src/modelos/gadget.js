const mongoose = require('mongoose');

const GadgetSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number },
    linkCompra: { type: String },
    calificacion: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Gadget', GadgetSchema);