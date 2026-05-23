const express = require('express');
const router = express.Router();

// Importamos el controlador con la lógica del CRUD que acabas de hacer
const gadgetControlador = require('../controladores/gadgetControlador');

// GET -> http://localhost:3000/api/gadgets
router.get('/', gadgetControlador.obtenerGadgets);

// POST -> http://localhost:3000/api/gadgets
router.post('/', gadgetControlador.crearGadget);

// PUT -> http://localhost:3000/api/gadgets/:id
router.put('/:id', gadgetControlador.actualizarGadget);

// DELETE -> http://localhost:3000/api/gadgets/:id
router.delete('/:id', gadgetControlador.eliminarGadget);

module.exports = router;