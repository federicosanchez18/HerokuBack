const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Colaboradores_Areas extends Model {}

Colaboradores_Areas.init({
    Colaborador_Area_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Colaborador_Area_Codigo: {
        type: Sequelize.STRING,
    },
    Colaborador_Area_Descripcion: {
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
    Visible: {
        type: Sequelize.STRING,
    },
},
    {   sequelize, 
        modelName: 'Colaboradores_Areas',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Colaboradores_Areas;