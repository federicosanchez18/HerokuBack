const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');
import Regiones from '../models/RegionesModel';

class Feriados extends Model {}

Feriados.init({
    Feriado_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Feriado_Region: {
        type: Sequelize.INTEGER,
    },
    Feriado_Tiempo: {
        type: Sequelize.INTEGER,
    },
    Feriado_Fecha: {
        type: Sequelize.DATE,
    },
    Feriado_Descripcion: {
        type: Sequelize.STRING,
    },
    Feriado_Laborable: {
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
        modelName: 'Feriados',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
    });

    Feriados.belongsTo(Regiones, {as: 'Region',targetKey:'Region_Key',foreignKey: 'Feriado_Region'})

module.exports = Feriados;
