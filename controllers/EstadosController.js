const Estados = require('../models/EstadosModel');


function findAll() {
    var promise = Estados.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Estados.create({
        Estado_Codigo: req.body.Estado_Codigo,
        Estado_Descripcion: req.body.Estado_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Estados.findOne({where: {Estado_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Estados.update({
        Estado_Codigo: req.body.Estado_Codigo,
        Estado_Descripcion: req.body.Estado_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible
    }, {
        where: {
            Estado_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Estados.destroy({
        where: {
            Estado_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};