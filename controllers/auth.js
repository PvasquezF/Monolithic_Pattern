const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    crear nuevo usuario
// @route   POST /api/auth/registro
// @access  public 
exports.registro = asyncHandler(async(req, res, next) => {
    const {
        User_Name,
        Correo_Electronico,
        Primer_Nombre,
        Segundo_Nombre,
        Primer_Apellido,
        Segundo_Apellido,
        Telefono,
        Fecha_Nacimiento,
        Pais,
        Ciudad,
        Contrasena
    } = req.body;

    if (!User_Name || !Correo_Electronico || !Primer_Nombre || !Segundo_Nombre || !Primer_Apellido || !Segundo_Apellido ||
        !Telefono || !Fecha_Nacimiento || !Pais || !Ciudad || !Contrasena) {
        res.status(400).json({
            estado: false,
            error: `User_Name, Correo_Electronico, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Telefono, Fecha_Nacimiento, Pais, Ciudad, Contrasena son necesarios!!`
        });
    }

    // verificar correo
    let exists = await User.findOne({
        where: {
            Correo_Electronico
        }
    });

    if (exists) {
        return res.status(400).json({
            estado: false,
            error: `El correo ingresado ya existe.`
        });
    }
    exists = undefined;
    // verificar user name
    exists = await User.findOne({
        where: {
            User_Name
        }
    });

    if (exists) {
        return res.status(400).json({
            estado: false,
            error: `El nombre de usuario ingresado ya existe.`
        });
    }

    // crear usuario
    let user;
    try {
        user = await User.create(req.body);
    } catch (error) {
        return res.status(400).json({
            estado: false,
            error: error
        });
    }

    // create token
    res.status(201).json({
        success: true,
        message: 'Usuario creado correctamente!.',
        data: user
    });
});