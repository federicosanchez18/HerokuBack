const Colaboradores_Areas = require('../models/Colaboradores_AreasModel');


function findAll() {
    var promise = Colaboradores_Areas.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Colaboradores_Areas.create({
        Colaborador_Area_Codigo: req.body.Colaborador_Area_Codigo,
        Colaborador_Area_Descripcion: req.body.Colaborador_Area_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X',
    })
    return promise
};

function find(codigo) {
    var promise = Colaboradores_Areas.findOne({where: {Colaborador_Area_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Colaboradores_Areas.update({
        Colaborador_Area_Codigo: req.body.Colaborador_Area_Codigo,
        Colaborador_Area_Descripcion: req.body.Colaborador_Area_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible,
    }, {
        where: {
            Colaborador_Area_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Colaboradores_Areas.destroy({
        where: {
            Colaborador_Area_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};