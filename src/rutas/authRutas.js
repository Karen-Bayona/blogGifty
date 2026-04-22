const express = require('express');
const router = express.Router();
const authControlador = require('../controladores/authControlador');

// Ruta para registrar usuario: POST http://localhost:3000/api/auth/registro
router.post('/registro', authControlador.registrarUsuario);

// Ruta para Login: POST http://localhost:3000/api/auth/login
router.post('/login', authControlador.iniciarSesion);

module.exports = router;