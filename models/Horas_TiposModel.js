const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Horas_Tipos extends Model {}

Horas_Tipos.init({
    Hora_Tipo_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Hora_Tipo_Codigo: {
        type: Sequelize.STRING,
    },
    Hora_Tipo_Descripcion: {
        type: Sequelize.STRING,
    },
    Usuario_Creacion: {
        type: Sequelize.INTEGER,
    },
    Usuario_Modificacion: {
        type: Sequelize.INTEGER,
    },
    Fecha_Creacion: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.NOW,
    },
    Fecha_Modificacion: {
        type: Sequelize.STRING,
    },
},
    {   sequelize, 
        modelName: 'Horas_Tipos',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Horas_Tipos;