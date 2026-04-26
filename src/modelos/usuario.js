const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true, // No permite que se repita correo electrónico
        lowercase: true, // Guarda todo en minúsculas
        trim: true // Borra espacios vacíos accidentales
    },
    password: {
        type: String,
        required: true,
        minlength: 8 // Requisito mínimo de seguridad
    },
    intereses: { 
        type: [String], 
        default: [] // Aquí guardaremos gustos como 'Yoga', 'Nutrición', etc.
    },
    rol: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Usuario', usuarioSchema); 