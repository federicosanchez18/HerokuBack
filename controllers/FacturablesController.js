const Facturables = require('../models/FacturablesModel');


function findAll() {
    var promise = Facturables.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Facturables.findAll({
        attributes: ['Facturable_Descripcion','Facturable_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Facturables.create({
        Facturable_Codigo: req.body.Facturable_Codigo,
        Facturable_Descripcion: req.body.Facturable_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(codigo) {
    var promise = Facturables.findOne({where: {Facturable_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Facturables.update({
        Facturable_Codigo: req.body.Facturable_Codigo,
        Facturable_Descripcion: req.body.Facturable_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Facturable_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Facturables.destroy({
        where: {
            Facturable_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};