const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');

const auth = require('../middleware/auth'); 

// 1. Ver todos los artículos
router.get('/', articuloController.obtenerArticulos);

// 2. Crear un artículo 
router.post('/', auth, articuloController.crearArticulo);

// 3. Actualizar un artículo 
router.put('/:id', auth, articuloController.actualizarArticulo);

// 4. Eliminar un artículo 
router.delete('/:id', auth, articuloController.eliminarArticulo);

module.exports = router;