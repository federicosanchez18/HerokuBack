const Industrias = require('../models/IndustriasModel');


function findAll() {
    var promise = Industrias.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Industrias.findAll({
        attributes: ['Industria_Descripcion','Industria_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Industrias.create({
        Industria_Codigo: req.body.Industria_Codigo,
        Industria_Descripcion: req.body.Industria_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X',
    })
    return promise
};

function find(codigo) {
    var promise = Industrias.findOne({where: {Industria_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Industrias.update({
        Industria_Codigo: req.body.Industria_Codigo,
        Industria_Descripcion: req.body.Industria_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible,
    }, {
        where: {
            Industria_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Industrias.destroy({
        where: {
            Industria_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};