const Horas = require('../models/HorasModel');

import Colaboradores from '../models/ColaboradoresModel';

import Facturables from '../models/FacturablesModel';
import Horas_Tipos from '../models/Horas_TiposModel';
import Usuarios from '../models/UsuariosModel';
import Proyectos from '../models/ProyectosModel';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function findAll(usuario, date) {
    var promise = await Horas.findAll({
        include: [
            {
                raw: true,
                model: Horas_Tipos,
                as: 'Tipo',
                attributes: ['Hora_Tipo_Codigo', 'Hora_Tipo_Descripcion'], 
            },
            {
                raw: true,
                model: Usuarios,
                as: 'Usuario',
                attributes: ['Usuario_Key'],
            },
            // {
            //     raw: true,

            //     model: Colaboradores,
            //     as: 'Colaborador',
            //     attributes: ['Colaborador_Usuario'],

            // },
            {
                raw: true,
                model: Proyectos,
                as: 'Proyecto',
                attributes: ['Proyecto_Codigo','Proyecto_Descripcion'],
            },            
            // {
            //     raw: true,

            //     model: Facturables,
            //     as: 'Facturable',
            //     attributes: ['Facturable_Codigo','Facturable_Descripcion'],

            // },
        ],
        order: [
            [['Proyecto','Proyecto_Descripcion', 'ASC']],
            ['Hora_Tiempo', 'ASC']
        ],
        where: {
            Hora_Usuario: usuario,
            Hora_Tiempo: {[Op.like]: `${date}%`},
        },

    })
    return promise
};


function find(usuario,date) {
    var promise = Horas.findAll({where: {Hora_Usuario: usuario ,
                                         Hora_Tiempo: {[Op.like]:`${date}%`},
                                        },
                                    })
    return promise
};

function destroy(usuario,date) {
    var promise = Horas.destroy({
        where: {
            Hora_Usuario: usuario,
            Hora_Tiempo: {[Op.like]:`${date}%`},
        }
    })
    return promise
}

function create(req) {

    var normalizedDate = new Date().toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires"
    })
    var promise = Horas.create({
        Hora_Tipo: req.body.Hora_Modalidad,
        Hora_Tiempo: req.body.Hora_Tiempo,
        Hora_Usuario: req.body.Hora_Usuario,
        Hora_Cantidad: req.body.Hora_Cantidad,
        Hora_Proyecto: req.body.Hora_Proyecto,
        //Hora_Adjunto: req.body.Hora_Adjunto,       
        //Hora_Observacion: req.body.Hora_Observacion,
        //Usuario_Creacion: req.body.Usuario_Creacion,
        //Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        //Fecha_Modificacion: normalizedDate,
    })
    return promise
};

export {findAll,find,create,destroy};