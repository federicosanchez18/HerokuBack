const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Tipos_Colaboradores extends Model {}

Tipos_Colaboradores.init({
    Tipo_Colaborador_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Tipo_Colaborador_Codigo: {
        type: Sequelize.STRING,
    },
    Tipo_Colaborador_Descripcion: {
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
        modelName: 'Tipos_Colaboradores',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Tipos_Colaboradores;