const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Proyectos_Alcances extends Model {}

Proyectos_Alcances.init({
    Proyecto_Alcance_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Proyecto_Alcance_Codigo: {
        type: Sequelize.STRING,
    },
    Proyecto_Alcance_Descripcion: {
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
        modelName: 'Proyectos_Alcances',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Proyectos_Alcances;