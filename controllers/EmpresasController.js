const Empresas = require('../models/EmpresasModel');
import Tipos_Empresas from '../models/Tipos_EmpresasModel';


function findAll() {
    var promise = Empresas.findAll({
        include : [
            {model: Tipos_Empresas,
            attributes:['Tipo_Empresa_Descripcion'],
            as: 'TipoEmpresa'}
        ]
    })
    return promise
};

async function findAllByDescription() {
    var promise = await Empresas.findAll({
        attributes: ['Empresa_Descripcion','Empresa_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Empresas.create({
        Empresa_Codigo: req.body.Empresa_Codigo,
        Empresa_Descripcion: req.body.Empresa_Descripcion,
        Empresa_Tipo: req.body.Empresa_Tipo,
        Empresa_Identificador_Laboral: req.body.Empresa_Identificador_Laboral,
        Empresa_Logo: req.body.Empresa_Logo,
        Empresa_Observacion: req.body.Empresa_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Empresas.findOne({where: {Empresa_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Empresas.update({
        Empresa_Codigo: req.body.Empresa_Codigo,
        Empresa_Descripcion: req.body.Empresa_Descripcion,
        Empresa_Tipo: req.body.Empresa_Tipo,
        Empresa_Identificador_Laboral: req.body.Empresa_Identificador_Laboral,
        Empresa_Logo: req.body.Empresa_Logo,
        Empresa_Observacion: req.body.Empresa_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible
    }, {
        where: {
            Empresa_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Empresas.destroy({
        where: {
            Empresa_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};