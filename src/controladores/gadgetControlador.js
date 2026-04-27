const Gadget = require('../modelos/gadget'); 

// 1. Obtener 
exports.obtenerGadgets = async (req, res) => {
    try {
        const gadgets = await Gadget.find();
        res.json(gadgets);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener gadgets" });
    }
};

// 2. Crear 
exports.crearGadget = async (req, res) => {
    try {
        const nuevoGadget = new Gadget(req.body);
        await nuevoGadget.save();
        res.status(201).json({ mensaje: "Gadget creado con éxito", nuevoGadget });
    } catch (error) {
        res.status(400).json({ error: "Error al crear gadget" });
    }
};
// 3. Actualizar
exports.actualizarGadget = async (req, res) => {
    try {
        const gadgetActualizado = await Gadget.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!gadgetActualizado) return res.status(404).json({ mensaje: "No encontrado" });
        res.json({ mensaje: "Actualizado correctamente", gadgetActualizado });
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar" });
    }
};

// 4. Eliminar
exports.eliminarGadget = async (req, res) => {
    try {
        const gadgetEliminado = await Gadget.findByIdAndDelete(req.params.id);
        if (!gadgetEliminado) return res.status(404).json({ mensaje: "No encontrado" });
        res.json({ mensaje: "Eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar" });
    }
};