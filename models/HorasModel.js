const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');
import Horas_Tipos from '../models/Horas_TiposModel';
import Proyectos from '../models/ProyectosModel';
import Facturables from '../models/FacturablesModel'
import Colaboradores from '../models/ColaboradoresModel';
import Usuarios from './UsuariosModel';

class Horas extends Model {}

Horas.init({
    Hora_Key: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true,
    },
    Hora_Tipo: {
        type: Sequelize.INTEGER,
    },
    Hora_Tiempo: {
        type: Sequelize.INTEGER,
    },
    Hora_Usuario: {
        type: Sequelize.INTEGER,
    },
    Hora_Cantidad: {
        type: Sequelize.INTEGER,
    },
    Hora_Proyecto: {
        type: Sequelize.INTEGER,
    },
    Hora_Adjunto: {
        type: Sequelize.STRING,
    },
    Hora_Observacion: {
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
        modelName: 'Horas',
        freezeTableName: true, //Propiedad para que sequelize no pluralice el nombre de la tabla
        createdAt: false, //Columna que se crea por defecto que se debe ignorar
        updatedAt: false, //Columna que se crea por defecto que se debe ignorar
        timezone: 'America/Argentina',
    });


Horas.belongsTo(Horas_Tipos,{as:'Tipo',targetKey:'Hora_Tipo_Key',foreignKey:'Hora_Tipo'});
// Horas.belongsTo(Colaboradores,{as:'Colaborador',targetKey:'Colaborador_Key',foreignKey: 'Hora_Usuario'});
Horas.belongsTo(Proyectos,{as:'Proyecto',targetKey:'Proyecto_Key',foreignKey:'Hora_Proyecto'});
Horas.belongsTo(Usuarios,{as:'Usuario',targetKey:'Usuario_Key',foreignKey: 'Hora_Usuario'});
// Horas.belongsTo(Facturables,{as:'Facturable',targetKey:'Facturable_Key',foreignKey:'Hora_Facturable'})

module.exports = Horas;