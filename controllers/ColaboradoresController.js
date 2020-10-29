const Colaboradores = require('../models/ColaboradoresModel');


function findAll() {
    var promise = Colaboradores.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Colaboradores.create({
        Colaborador_Usuario: req.body.Colaborador_Usuario,
        Colaborador_Region: req.body.Colaborador_Region,
        Colaborador_Area: req.body.Colaborador_Area,
        Colaborador_Puesto: req.body.Colaborador_Puesto,
        Colaborador_Tipo: req.body.Colaborador_Tipo,
        Colaborador_Empresa: req.body.Colaborador_Empresa,
        Colaborador_Estado: req.body.Colaborador_Estado,
        Colaborador_Codigo: req.body.Colaborador_Codigo,
        Colaborador_Descripcion: req.body.Colaborador_Descripcion,
        Colaborador_Responsable_Principal: req.body.Colaborador_Responsable_Principal,
        Colaborador_Responsable_Secundario: req.body.Colaborador_Responsable_Secundario,
        Colaborador_Observacion: req.body.Colaborador_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X',
    })
    return promise
};

function find(codigo) {
    var promise = Colaboradores.findOne({where: {Colaborador_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Colaboradores.update({
        Colaborador_Usuario: req.body.Colaborador_Usuario,
        Colaborador_Region: req.body.Colaborador_Region,
        Colaborador_Area: req.body.Colaborador_Area,
        Colaborador_Puesto: req.body.Colaborador_Puesto,
        Colaborador_Tipo: req.body.Colaborador_Tipo,
        Colaborador_Empresa: req.body.Colaborador_Empresa,
        Colaborador_Estado: req.body.Colaborador_Estado,
        Colaborador_Codigo: req.body.Colaborador_Codigo,
        Colaborador_Descripcion: req.body.Colaborador_Descripcion,
        Colaborador_Responsable_Principal: req.body.Colaborador_Responsable_Principal,
        Colaborador_Responsable_Secundario: req.body.Colaborador_Responsable_Secundario,
        Colaborador_Observacion: req.body.Colaborador_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible,
    }, {
        where: {
            Colaborador_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Colaboradores.destroy({
        where: {
            Colaborador_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};