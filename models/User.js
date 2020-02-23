const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = db.define('usuarios', {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    User_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Correo_Electronico: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
    },
    Primer_Nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Segundo_Nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Primer_Apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Segundo_Apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Telefono: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Fecha_Nacimiento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ciudad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Contrasena: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
}, {
    hooks: {
        beforeCreate: async function(user) {
            if (user.Contrasena) {
                const salt = await bcrypt.genSalt(10);
                user.Contrasena = await bcrypt.hash(user.Contrasena, salt);
            }
        },
        beforeUpdate: async function(user) {
            if (user.Contrasena) {
                const salt = await bcrypt.genSalt(10);
                user.Contrasena = await bcrypt.hash(user.Contrasena, salt);
                user.updatedAt = new Date();
            }
        }
    }
});

module.exports = User;