const Gadget = require('../modelos/gadget');

exports.obtenerGadgets = async (req, res) => {
    try {
        const gadgets = await Gadget.find();
        res.json(gadgets);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener gadgets" });
    }
};

exports.crearGadget = async (req, res) => {
    try {
        const nuevoGadget = new Gadget(req.body);
        await nuevoGadget.save();
        res.status(201).json(nuevoGadget);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear gadget" });
    }
};