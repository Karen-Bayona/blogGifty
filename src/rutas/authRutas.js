const express = require('express');
const router = express.Router();
const authControlador = require('../controladores/authControlador');
const authMiddleware = require('../middlewares/authMiddleware');

// Registro
router.post('/registro', authControlador.registrarUsuario);

// Login
router.post('/login', authControlador.iniciarSesion);

// Perfil 
router.get('/perfil', authMiddleware, authControlador.usuarioAutenticado);
module.exports = router;