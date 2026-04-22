const express = require('express');
const router = express.Router();
const authControlador = require('../controladores/authControlador');

// Ruta para registrar usuario: POST http://localhost:3000/api/auth/registro
router.post('/registro', authControlador.registrarUsuario);

module.exports = router;