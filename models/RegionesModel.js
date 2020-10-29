const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');
import Monedas from '../models/MonedasModel';

class Regiones extends Model {}

Regiones.init({
    Region_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Region_Codigo: {
        type: Sequelize.STRING,
    },
    Region_Descripcion: {
        type: Sequelize.STRING,
    },
    Region_Region_Agrupada: {
        type: Sequelize.INTEGER,
    },
    Region_Moneda: {
        type: Sequelize.INTEGER,
    },
    Region_Observacion: {
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
        modelName: 'Regiones',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });

module.exports = Regiones;