const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Colaboradores_Puestos extends Model {}

Colaboradores_Puestos.init({
    Colaborador_Puesto_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Colaborador_Puesto_Codigo: {
        type: Sequelize.STRING,
    },
    Colaborador_Puesto_Descripcion: {
        type: Sequelize.STRING,
    },
    Colaborador_Puesto_Padre: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Puesto_Observacion: {
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
        modelName: 'Colaboradores_Puestos',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Colaboradores_Puestos;