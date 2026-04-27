const usuario = require('../modelos/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar Usuario
exports.registrarUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        // Verificar si el usuario ya existe 
        let usuarioExistente = await usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear el nuevo usuario
        const nuevoUsuario = new usuario({ nombre, email, password });

        // Encriptar la contraseña (Seguridad de Karen Bayona)
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.password = await bcrypt.hash(password, salt);

        // Guardar en la BD
        await nuevoUsuario.save();

        res.status(201).json({ msg: 'Usuario creado exitosamente con contraseña segura' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};

// Login (Entrega JWT)
exports.iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usuario.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const esCorrecto = await bcrypt.compare(password, user.password);
        if (!esCorrecto) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Generar el Token con Payload extendido
        const payload = {
            usuario: {
                id: user.id,
                nombre: user.nombre,
                rol: user.rol
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};

// Obtener usuario autenticado
exports.usuarioAutenticado = async (req, res) => {
    try {
        const userLogueado = await usuario.findById(req.usuario.id).select('-password');
        res.json({ usuario: userLogueado });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el perfil');
    }
};