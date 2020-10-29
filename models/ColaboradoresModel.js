const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Colaboradores extends Model {}

Colaboradores.init({
    Colaborador_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Colaborador_Usuario: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Region: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Area: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Puesto: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Tipo: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Empresa: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Estado: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Codigo: {
        type: Sequelize.STRING,
    },
    Colaborador_Descripcion: {
        type: Sequelize.STRING,
    },
    Colaborador_Responsable_Principal: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Responsable_Secundario: {
        type: Sequelize.INTEGER,
    },
    Colaborador_Observacion: {
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
        modelName: 'Colaboradores',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Colaboradores;