const Regiones = require('../models/RegionesModel');


function findAll() {
    var promise = Regiones.findAll()
    return promise
};


async function findAllByDescription() {
    var promise = await Regiones.findAll({
        attributes: ['Region_Descripcion','Region_Key']
    })
    return promise
};


function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Regiones.create({
        Region_Codigo: req.body.Region_Codigo,
        Region_Descripcion: req.body.Region_Descripcion,
        Region_Region_Agrupada: req.body.Region_Region_Agrupada,
        Region_Moneda: req.body.Region_Moneda,
        Region_Observacion: req.body.Region_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X',
    })
    return promise
};

function find(codigo) {
    var promise = Regiones.findOne({where: {Region_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Regiones.update({
        Region_Codigo: req.body.Region_Codigo,
        Region_Descripcion: req.body.Region_Descripcion,
        Region_Region_Agrupada: req.body.Region_Region_Agrupada,
        Region_Moneda: req.body.Region_Moneda,
        Region_Observacion: req.body.Region_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible,
    }, {
        where: {
            Region_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Regiones.destroy({
        where: {
            Region_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};