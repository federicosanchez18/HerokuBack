const Colaboradores_Puestos = require('../models/Colaboradores_PuestosModel');


function findAll() {
    var promise = Colaboradores_Puestos.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Colaboradores_Puestos.create({
        Colaborador_Puesto_Codigo: req.body.Colaborador_Puesto_Codigo,
        Colaborador_Puesto_Descripcion: req.body.Colaborador_Puesto_Descripcion,
        Colaborador_Puesto_Padre : req.body.Colaborador_Puesto_Padre,
        Colaborador_Puesto_Observacion : req.body.Colaborador_Puesto_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Colaboradores_Puestos.findOne({where: {Colaborador_Puesto_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Colaboradores_Puestos.update({
        Colaborador_Puesto_Codigo: req.body.Colaborador_Puesto_Codigo,
        Colaborador_Puesto_Descripcion: req.body.Colaborador_Puesto_Descripcion,
        Colaborador_Puesto_Padre : req.body.Colaborador_Puesto_Padre,
        Colaborador_Puesto_Observacion : req.body.Colaborador_Puesto_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible
    }, {
        where: {
            Colaborador_Puesto_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Colaboradores_Puestos.destroy({
        where: {
            Colaborador_Puesto_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};