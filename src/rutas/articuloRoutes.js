const express = require('express');
const router = express.Router();
const articuloControlador = require('../controladores/articuloControlador');

const auth = require('../middlewares/authMiddleware'); 

// 1. Ver todos los artículos
router.get('/', articuloControlador.obtenerArticulos);

// 2. Crear un artículo 
router.post('/', auth, articuloControlador.crearArticulo);

// 3. Actualizar un artículo 
router.put('/:id', auth, articuloControlador.actualizarArticulo);

// 4. Eliminar un artículo 
router.delete('/:id', auth, articuloControlador.eliminarArticulo);

module.exports = router;