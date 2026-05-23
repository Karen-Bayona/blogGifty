const Gadget = require('../modelos/gadget'); 

// 1. Obtener todos los gadgets (GET)
exports.obtenerGadgets = async (req, res) => {
    try {
        const gadgets = await Gadget.find();
        res.status(200).json(gadgets);
    } catch (error) {
        res.status(500).json({ 
            mensaje: "Error al obtener los gadgets tecnológicos", 
            error: error.message 
        });
    }
};

// 2. Crear un nuevo gadget (POST)
exports.crearGadget = async (req, res) => {
    try {
        const nuevoGadget = new Gadget(req.body);
        await nuevoGadget.save();
        res.status(201).json({ 
            mensaje: "Gadget de bienestar creado con éxito", 
            gadget: nuevoGadget 
        });
    } catch (error) {
        res.status(400).json({ 
            mensaje: "Error al crear el gadget, verifica los campos obligatorios", 
            error: error.message 
        });
    }
};

// 3. Actualizar un gadget existente por ID (PUT)
exports.actualizarGadget = async (req, res) => {
    try {
        const gadgetActualizado = await Gadget.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } // runValidators asegura que respete las reglas del modelo
        );
        
        if (!gadgetActualizado) {
            return res.status(404).json({ mensaje: "El gadget especificado no fue encontrado" });
        }
        
        res.status(200).json({ 
            mensaje: "Gadget actualizado correctamente", 
            gadget: gadgetActualizado 
        });
    } catch (error) {
        res.status(400).json({ 
            mensaje: "Error al actualizar los datos del gadget", 
            error: error.message 
        });
    }
};

// 4. Eliminar un gadget por ID (DELETE)
exports.eliminarGadget = async (req, res) => {
    try {
        const gadgetEliminado = await Gadget.findByIdAndDelete(req.params.id);
        
        if (!gadgetEliminado) {
            return res.status(404).json({ mensaje: "El gadget que intentas eliminar no existe" });
        }
        
        res.status(200).json({ 
            mensaje: "Gadget eliminado correctamente del sistema" 
        });
    } catch (error) {
        res.status(400).json({ 
            mensaje: "Error al procesar la eliminación del gadget", 
            error: error.message 
        });
    }
};