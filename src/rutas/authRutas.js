const express = require('express');
const router = express.Router();
const authControlador = require('../controladores/authControlador');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para registrar usuario: POST http://localhost:3000/api/auth/registro
router.post('/registro', authControlador.registrarUsuario);

// Ruta para Login: POST http://localhost:3000/api/auth/login
router.post('/login', authControlador.iniciarSesion);

// Ruta de Perfil: GET http://localhost:3000/api/auth/perfil
router.get('/perfil', authMiddleware, authControlador.usuarioAutenticado);

module.exports = router;