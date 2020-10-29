const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Regiones_Agrupadas extends Model {}

Regiones_Agrupadas.init({
    Region_Agrupada_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Region_Agrupada_Codigo: {
        type: Sequelize.STRING,
    },
    Region_Agrupada_Descripcion: {
        type: Sequelize.STRING,
    },
    Region_Agrupada_Observacion: {
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
        modelName: 'Regiones_Agrupadas',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Regiones_Agrupadas;