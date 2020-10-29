import Unidades_Negocios from '../models/Unidades_NegociosModel';
import Facturables from '../models/FacturablesModel';
import Proyectos_Tipos from '../models/Proyectos_TiposModel';
import Monedas from '../models/MonedasModel';
import Proyectos_Tecnologias from '../models/Proyectos_TecnologiasModel';
import Usuarios from '../models/UsuariosModel';
const Proyectos = require('../models/ProyectosModel');

async function findAll() {
    var promise = await Proyectos.findAll({
        include : [{
            raw: true,
            model: Unidades_Negocios,
            attributes:['Unidad_Negocio_Descripcion'],
            as: 'Unidad_Negocio'},
            {model: Facturables,
            attributes:['Facturable_Descripcion'],
            as: 'Facturable'},
            {model: Proyectos_Tipos,
            attributes:['Proyecto_Tipo_Descripcion','Proyecto_Tipo_Grupo',
            'Proyecto_Tipo_Beneficio'],
            as: 'Tipo'},
            {model: Monedas,
            attributes:['Moneda_Descripcion'],
            as: 'Moneda'
            },
            {model: Usuarios,
            attributes:['Usuario_Nombre_Completo'],
            as: 'Responsable'
            },
            {model: Usuarios,
            attributes:['Usuario_Nombre_Completo'],
            as: 'Vendedor'
            },
            {model: Proyectos_Tecnologias,
            as: 'Tecnologias',
            },],
            where: {
                Visible: 'X'
            }
        })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos.create({
        Proyecto_Unidad_Negocio: req.body.Proyecto_Unidad_Negocio,
        Proyecto_Facturable: req.body.Proyecto_Facturable,
        Proyecto_Alcance: req.body.Proyecto_Alcance,
        Proyecto_Codigo: req.body.Proyecto_Codigo,
        Proyecto_Descripcion: req.body.Proyecto_Descripcion,
        Proyecto_Tipo: req.body.Proyecto_Tipo,
        Proyecto_Cliente: req.body.Proyecto_Cliente,
        Proyecto_Moneda: req.body.Proyecto_Moneda,
        Proyecto_Responsable: req.body.Proyecto_Responsable,
        Proyecto_Vendedor: req.body.Proyecto_Vendedor,
        Proyecto_Referente_Comercial: req.body.Proyecto_Referente_Comercial,
        Proyecto_Referente_Comercial_Mail: req.body.Proyecto_Referente_Comercial_Mail,
        Proyecto_Referente_Tecnico: req.body.Proyecto_Referente_Tecnico,
        Proyecto_Referente_Tecnico_Mail: req.body.Proyecto_Referente_Tecnico_Mail,
        Proyecto_Codigo_Externo: req.body.Proyecto_Codigo_Externo,
        Proyecto_Newsletter: req.body.Proyecto_Newsletter,
        Proyecto_Observacion: req.body.Proyecto_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Proyectos.findOne({
        include: [
            {raw: true,
            model: Proyectos_Tecnologias,
            as: 'Tecnologias',
            },
        ],
        where: {Proyecto_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos.update({
        Proyecto_Unidad_Negocio: req.body.Proyecto_Unidad_Negocio,
        Proyecto_Facturable: req.body.Proyecto_Facturable,
        Proyecto_Alcance: req.body.Proyecto_Alcance,
        Proyecto_Codigo: req.body.Proyecto_Codigo,
        Proyecto_Descripcion: req.body.Proyecto_Descripcion,
        Proyecto_Tipo: req.body.Proyecto_Tipo,
        Proyecto_Cliente: req.body.Proyecto_Cliente,
        Proyecto_Moneda: req.body.Proyecto_Moneda,
        Proyecto_Responsable: req.body.Proyecto_Responsable,
        Proyecto_Vendedor: req.body.Proyecto_Vendedor,
        Proyecto_Referente_Comercial: req.body.Proyecto_Referente_Comercial,
        Proyecto_Referente_Comercial_Mail: req.body.Proyecto_Referente_Comercial_Mail,
        Proyecto_Referente_Tecnico: req.body.Proyecto_Referente_Tecnico,
        Proyecto_Referente_Tecnico_Mail: req.body.Proyecto_Referente_Tecnico_Mail,
        Proyecto_Codigo_Externo: req.body.Proyecto_Codigo_Externo,
        Proyecto_Newsletter: req.body.Proyecto_Newsletter,
        Proyecto_Observacion: req.body.Proyecto_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate, //DATE NOW,
        Visible: req.body.Visible
    }, {
        where: {
            Proyecto_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Proyectos.destroy({
        where: {
            Proyecto_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};