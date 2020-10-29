const Idiomas = require('../models/IdiomasModel');


function findAll() {
    var promise = Idiomas.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Idiomas.create({
        Idioma_Codigo: req.body.Idioma_Codigo,
        Idioma_Descripcion: req.body.Idioma_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(codigo) {
    var promise = Idiomas.findOne({where: {Idioma_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Idiomas.update({
        Idioma_Codigo: req.body.Idioma_Codigo,
        Idioma_Descripcion: req.body.Idioma_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Idioma_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Idiomas.destroy({
        where: {
            Idioma_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};