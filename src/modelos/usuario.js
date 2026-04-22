const mongoose = require('mongoose');

// Estructura de la "tabla" de usuarios
const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // No permite que se repita correo electronico
        lowercase: true, // Guarda todo en minúsculas
        trim: true // Borra espacios vacíos accidentales
    },
    password: {
        type: String,
        required: true,
        minlength: 8 // Requisito mínimo de seguridad
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);