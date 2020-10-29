const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');
import Tecnologias from '../models/TecnologiasModel';

class Proyectos_Tecnologias extends Model {}

Proyectos_Tecnologias.init({
    Proyecto_Tecnologia_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Proyecto_Tecnologia_Proyecto: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Tecnologia_Tecnologia: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Tecnologia_Porcentaje: {
        type: DataTypes.FLOAT,
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
        modelName: 'Proyectos_Tecnologias',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });

Proyectos_Tecnologias.belongsTo(Tecnologias, {as: 'Tecnologia', targetKey:'Tecnologia_Key',foreignKey: 'Proyecto_Tecnologia_Tecnologia'})

module.exports = Proyectos_Tecnologias;