const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

class Clientes_Fiscales extends Model {}

Clientes_Fiscales.init({
    Cliente_Fiscal_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Cliente_Fiscal_Codigo: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Descripcion: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Cliente: {
        type: Sequelize.INTEGER,
    },
    Cliente_Fiscal_Tipo_ID_Fiscal: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Identificador_Fiscal: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_IIBB: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Direccion: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Telefono: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Giro_Negocio: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Mail_Para: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Mail_Copia: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Direccion_Factura: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Mail_Pagos: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Telefono_Pagos: {
        type: Sequelize.STRING,
    },
    Cliente_Fiscal_Predeterminado: {
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
        modelName: 'Clientes_Fiscales',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


module.exports = Clientes_Fiscales;