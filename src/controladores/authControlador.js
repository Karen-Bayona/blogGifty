const usuario = require('../modelos/usuario');
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Verificar si el usuario ya existe 
        let usuarioExistente = await usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear el nuevo usuario
        const nuevoUsuario = new usuario({ email, password });

        // 3. Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.password = await bcrypt.hash(password, salt);

        // 4. Guardar en la BD
        await nuevoUsuario.save();

        res.status(201).json({ msg: 'Usuario creado exitosamente con contraseña segura' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};