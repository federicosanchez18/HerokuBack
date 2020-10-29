const Unidades_Negocios = require('../models/Unidades_NegociosModel');


function findAll() {
    var promise = Unidades_Negocios.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Unidades_Negocios.findAll({
        attributes: ['Unidad_Negocio_Descripcion','Unidad_Negocio_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Unidades_Negocios.create({
        Unidad_Negocio_Codigo: req.body.Unidad_Negocio_Codigo,
        Unidad_Negocio_Descripcion: req.body.Unidad_Negocio_Descripcion,
        Unidad_Negocio_Observacion: req.body.Unidad_Negocio_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X',
    })
    return promise
};

function find(codigo) {
    var promise = Unidades_Negocios.findOne({where: {Unidad_Negocio_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Unidades_Negocios.update({
        Unidad_Negocio_Codigo: req.body.Unidad_Negocio_Codigo,
        Unidad_Negocio_Descripcion: req.body.Unidad_Negocio_Descripcion,
        Unidad_Negocio_Observacion: req.body.Unidad_Negocio_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible,
    }, {
        where: {
            Unidad_Negocio_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Unidades_Negocios.destroy({
        where: {
            Unidad_Negocio_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};