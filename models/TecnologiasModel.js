const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Tecnologias extends Model {}

Tecnologias.init({
    Tecnologia_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Tecnologia_Codigo: {
        type: Sequelize.STRING,
    },
    Tecnologia_Descripcion: {
        type: Sequelize.STRING,
    },
    Tecnologia_Tipo: {
        type: Sequelize.INTEGER,
    },
    Tecnologia_Proveedor: {
        type: Sequelize.STRING,
    },
    Tecnologia_Referente: {
        type: Sequelize.STRING,
    },
    Tecnologia_Caso_Exito: {
        type: Sequelize.STRING,
    },
    Tecnologia_Observacion: {
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
        modelName: 'Tecnologias',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Tecnologias;