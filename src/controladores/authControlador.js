const usuario = require('../modelos/usuario');
const bcrypt = require('bcryptjs');

//Registrar un nuevo usuario
exports.registrarUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario ya existe
        let usuario = await usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear el nuevo usuario
        usuario = new usuario({ email, password });

        // Encriptar la contraseña 
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        // Guardar en la BD
        await usuario.save();

        res.status(201).json({ msg: 'Usuario creado exitosamente' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};