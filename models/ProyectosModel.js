const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');
import Unidades_Negocios from '../models/Unidades_NegociosModel';
import Facturables from '../models/FacturablesModel';
import Proyectos_Alcances from '../models/Proyectos_AlcancesModel';
import Proyectos_Tipos from '../models/Proyectos_TiposModel';
import Monedas from '../models/MonedasModel';
import Usuarios from '../models/UsuariosModel';
import Proyectos_Tecnologias from '../models/Proyectos_TecnologiasModel';



class Proyectos extends Model {}

Proyectos.init({
    Proyecto_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Proyecto_Unidad_Negocio: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Facturable: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Alcance: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Codigo: {
        type: Sequelize.STRING,
    },
    Proyecto_Descripcion: {
        type: Sequelize.STRING,
    },
    Proyecto_Tipo: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Cliente: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Moneda: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Responsable: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Vendedor: {
        type: Sequelize.INTEGER,
    },
    Proyecto_Referente_Comercial: {
        type: Sequelize.STRING,
    },
    Proyecto_Referente_Comercial_Mail: {
        type: Sequelize.STRING,
    },
    Proyecto_Referente_Tecnico: {
        type: Sequelize.STRING,
    },
    Proyecto_Referente_Tecnico_Mail: {
        type: Sequelize.STRING,
    },
    Proyecto_Codigo_Externo: {
        type: Sequelize.STRING,
    },
    Proyecto_Newsletter: {
        type: Sequelize.STRING,
    },
    Proyecto_Observacion: {
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
        modelName: 'Proyectos',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });

Proyectos.belongsTo(Unidades_Negocios, {as: 'Unidad_Negocio', targetKey:'Unidad_Negocio_Key',foreignKey: 'Proyecto_Unidad_Negocio'})
Proyectos.belongsTo(Facturables, {as: 'Facturable', targetKey:'Facturable_Key',foreignKey: 'Proyecto_Facturable'})
Proyectos.belongsTo(Proyectos_Alcances, {as: 'Alcance', targetKey:'Proyecto_Alcance_Key',foreignKey: 'Proyecto_Alcance'})
Proyectos.belongsTo(Proyectos_Tipos, {as: 'Tipo', targetKey:'Proyecto_Tipo_Key',foreignKey: 'Proyecto_Tipo'})
Proyectos.belongsTo(Monedas, {as: 'Moneda',sourceKey: 'Moneda_Key' ,foreignKey:'Proyecto_Moneda'})
Proyectos.hasMany(Proyectos_Tecnologias, {as: 'Tecnologias', foreignKey: 'Proyecto_Tecnologia_Proyecto'})
Proyectos.hasOne(Usuarios, {as: 'Responsable',sourceKey: 'Proyecto_Responsable' ,foreignKey:'Usuario_Key'})
Proyectos.hasOne(Usuarios, {as: 'Vendedor',sourceKey: 'Proyecto_Vendedor' ,foreignKey:'Usuario_Key'})


module.exports = Proyectos;