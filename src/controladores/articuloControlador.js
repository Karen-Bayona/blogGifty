const Articulo = require('../models/articulo');

// Crear
exports.crearArticulo = async (req, res) => {
    try {
        const nuevoArticulo = new Articulo(req.body);
        await nuevoArticulo.save();
        res.status(201).json({ mensaje: "Artículo creado con éxito", nuevoArticulo });
    } catch (error) {
        res.status(400).json({ error: "Error al crear el artículo" });
    }
};

// Leer todos
exports.obtenerArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.find();
        res.json(articulos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener artículos" });
    }
};

// Actualizar
exports.actualizarArticulo = async (req, res) => {
    try {
        const actualizado = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ mensaje: "Actualizado correctamente", actualizado });
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar" });
    }
};

// Eliminar
exports.eliminarArticulo = async (req, res) => {
    try {
        const articuloEliminado = await Articulo.findByIdAndDelete(req.params.id);
        
        if (!articuloEliminado) {
            return res.status(404).json({ mensaje: "El artículo no existe" });
        }

        res.json({ mensaje: "Artículo eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar" });
    }
};