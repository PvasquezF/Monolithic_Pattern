const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
var express = require('express');
var body_parser = require('body-parser');

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
        //res.status(400).json({
        //    estado: false,
        //    error: `User_Name, Correo_Electronico, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Telefono, Fecha_Nacimiento, Pais, Ciudad, Contrasena son necesarios!!`
        //});
        return res.send(`Error: User_Name, Correo_Electronico, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Telefono, Fecha_Nacimiento, Pais, Ciudad, Contrasena son necesarios!!`);
    }

    // verificar correo
    let exists = await User.findOne({
        where: {
            Correo_Electronico
        }
    });

    if (exists) {
        //return res.status(400).json({
        //    estado: false,
        //    error: `El correo ingresado ya existe.`
        //});
        return res.send('El correo ingresado ya existe.')
    }
    exists = undefined;
    // verificar user name
    exists = await User.findOne({
        where: {
            User_Name
        }
    });

    if (exists) {
        //return res.status(400).json({
        //    estado: false,
        //    error: `El nombre de usuario ingresado ya existe.`
        //});
        return res.send('El nombre de usuario ingresado ya existe.')
    }

    // crear usuario
    let user;
    try {
        user = await User.create(req.body);
    } catch (error) {
        //return res.status(400).json({
        //    estado: false,
        //    error: error
        //});
        return res.send(error);
    }

    // create token
    res.send("Usuario registrado");
});

