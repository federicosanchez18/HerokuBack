const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Usuarios extends Model {}

Usuarios.init({
    Usuario_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Usuario_Codigo: {
        type: Sequelize.STRING,
    },
    Usuario_Rol: {
        type: Sequelize.INTEGER,
    },
    Usuario_Nombre_Completo: {
        type: Sequelize.STRING,
    },
    Usuario_Apellido: {
        type: Sequelize.STRING,
    },
    Usuario_Nombre: {
        type: Sequelize.STRING,
    },
    Usuario_Mail: {
        type: Sequelize.STRING,
    },
    Usuario_TokenID: {
        type: Sequelize.STRING,
    },
    Usuario_Tipo: {
        type: Sequelize.STRING,
    },
    Usuario_Habilitado: {
        type: Sequelize.STRING,
    },
    Usuario_Mail_Alternativo: {
        type: Sequelize.STRING,
    },
},
    {   sequelize, 
        modelName: 'Usuarios',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Usuarios;