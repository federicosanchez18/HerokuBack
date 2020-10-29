const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');
import Tipos_Empresas from '../models/Tipos_EmpresasModel';

class Empresas extends Model {}

Empresas.init({
    Empresa_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Empresa_Codigo: {
        type: Sequelize.STRING,
    },
    Empresa_Descripcion: {
        type: Sequelize.STRING,
    },
    Empresa_Tipo: {
        type: Sequelize.INTEGER,
    },
    Empresa_Identificador_Laboral: {
        type: Sequelize.INTEGER,
    },
    Empresa_Observacion: {
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
        modelName: 'Empresas',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });

Empresas.belongsTo(Tipos_Empresas, {as: 'TipoEmpresa', targetKey:'Tipo_Empresa_Key',foreignKey: 'Empresa_Tipo'})

module.exports = Empresas;