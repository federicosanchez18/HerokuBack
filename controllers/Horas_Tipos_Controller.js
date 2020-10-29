const Horas_Tipos = require('../models/Horas_TiposModel');


function findAll() {
    var promise = Horas_Tipos.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Horas_Tipos.create({
        Hora_Tipo_Codigo: req.body.Hora_Tipo_Codigo,
        Hora_Tipo_Descripcion: req.body.Hora_Tipo_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(codigo) {
    var promise = Horas_Tipos.findOne({where: {Hora_Tipo_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Horas_Tipos.update({
        Hora_Tipo_Codigo: req.body.Hora_Tipo_Codigo,
        Hora_Tipo_Descripcion: req.body.Hora_Tipo_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Hora_Tipo_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Horas_Tipos.destroy({
        where: {
            Hora_Tipo_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};