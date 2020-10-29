const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');
import Regiones from '../models/RegionesModel';
import Industrias from '../models/IndustriasModel';
import ClientesFiscales from '../models/Clientes_FiscalesModel';
import Monedas from '../models/MonedasModel';
import Proyectos from '../models/ProyectosModel';
import Empresas from '../models/EmpresasModel';

class Clientes extends Model {}

Clientes.init({
    Cliente_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Cliente_Codigo: {
        type: Sequelize.STRING,
    },
    Cliente_Descripcion: {
        type: Sequelize.STRING,
    },
    Cliente_Region: {
        type: Sequelize.INTEGER,
    },
    Cliente_Industria: {
        type: Sequelize.INTEGER,
    },
    Cliente_Empresa: {
        type: Sequelize.INTEGER,
    },
    Cliente_Moneda_Principal: {
        type: Sequelize.INTEGER,
    },
    Cliente_Logo: {
        type: Sequelize.STRING,
    },
    Cliente_Observacion: {
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
    }
},
    {   sequelize, 
        modelName: 'Clientes',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });

Clientes.belongsTo(Regiones, {as: 'Region',targetKey:'Region_Key',foreignKey: 'Cliente_Region'})
Clientes.belongsTo(Industrias, {as: 'Industria', targetKey:'Industria_Key',foreignKey: 'Cliente_Industria'})
Clientes.belongsTo(Empresas, {as: 'Empresa', targetKey:'Empresa_Key',foreignKey: 'Cliente_Empresa'})
Clientes.hasMany(ClientesFiscales, {as: 'ClientesFiscales', foreignKey: 'Cliente_Fiscal_Cliente'})
Clientes.hasMany(Proyectos, {as: 'Proyectos', foreignKey: 'Proyecto_Cliente'})
Clientes.belongsTo(Monedas, {as: 'Moneda',targetKey: 'Moneda_Key' ,foreignKey:'Cliente_Moneda_Principal'})

module.exports = Clientes;