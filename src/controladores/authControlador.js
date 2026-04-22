const usuario = require('../modelos/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Registrar Usuario
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

//Login
exports.iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Comparar la contraseña con el Hash de la base de datos
        const esCorrecto = await bcrypt.compare(password, usuario.password);
        if (!esCorrecto) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Crear el Token JWT
        const payload = {
            usuario: { id: usuario.id }
        };

        // El token expira en 2 horas y usa una palabra secreta del .env
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};