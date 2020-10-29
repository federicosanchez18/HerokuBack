const Regiones_Agrupadas = require('../models/Regiones_AgrupadasModel');


function findAll() {
    var promise = Regiones_Agrupadas.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Regiones_Agrupadas.create({
        Region_Agrupada_Codigo: req.body.Region_Agrupada_Codigo,
        Region_Agrupada_Descripcion: req.body.Region_Agrupada_Descripcion,
        Region_Agrupada_Observacion: req.body.Region_Agrupada_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Regiones_Agrupadas.findOne({where: {Region_Agrupada_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Regiones_Agrupadas.update({
        Region_Agrupada_Codigo: req.body.Region_Agrupada_Codigo,
        Region_Agrupada_Descripcion: req.body.Region_Agrupada_Descripcion,
        Region_Agrupada_Observacion: req.body.Region_Agrupada_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible
    }, {
        where: {
            Region_Agrupada_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Regiones_Agrupadas.destroy({
        where: {
            Region_Agrupada_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};