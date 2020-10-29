const Tipos_Empresas = require('../models/Tipos_EmpresasModel');


function findAll() {
    var promise = Tipos_Empresas.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Tipos_Empresas.findAll({
        attributes: ['Tipo_Empresa_Descripcion','Tipo_Empresa_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tipos_Empresas.create({
        Tipo_Empresa_Codigo: req.body.Tipo_Empresa_Codigo,
        Tipo_Empresa_Descripcion: req.body.Tipo_Empresa_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(codigo) {
    var promise = Tipos_Empresas.findOne({where: {Tipo_Empresa_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tipos_Empresas.update({
        Tipo_Empresa_Codigo: req.body.Tipo_Empresa_Codigo,
        Tipo_Empresa_Descripcion: req.body.Tipo_Empresa_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Tipo_Empresa_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Tipos_Empresas.destroy({
        where: {
            Tipo_Empresa_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};