const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');

// Importamos el middleware de seguridad que hizo Karen
// Asegúrate de que la ruta al archivo sea la correcta
const auth = require('../middleware/auth'); 

// --- RUTAS DE NEGOCIO ---

// 1. Ver todos los artículos (Público: no necesita token)
router.get('/', articuloController.obtenerArticulos);

// 2. Crear un artículo (Protegido: Laura, aquí aplicas la seguridad de Karen)
router.post('/', auth, articuloController.crearArticulo);

// 3. Actualizar un artículo (Protegido)
router.put('/:id', auth, articuloController.actualizarArticulo);

// 4. Borrar un artículo (Protegido)
router.delete('/:id', auth, articuloController.borrarArticulo);

module.exports = router;