const Proyectos_Alcances = require('../models/Proyectos_AlcancesModel');


function findAll() {
    var promise = Proyectos_Alcances.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Proyectos_Alcances.findAll({
        attributes: ['Proyecto_Alcance_Descripcion','Proyecto_Alcance_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos_Alcances.create({
        Proyecto_Alcance_Codigo: req.body.Proyecto_Alcance_Codigo,
        Proyecto_Alcance_Descripcion: req.body.Proyecto_Alcance_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(codigo) {
    var promise = Proyectos_Alcances.findOne({where: {Proyecto_Alcance_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos_Alcances.update({
        Proyecto_Alcance_Codigo: req.body.Proyecto_Alcance_Codigo,
        Proyecto_Alcance_Descripcion: req.body.Proyecto_Alcance_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Proyecto_Alcance_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Proyectos_Alcances.destroy({
        where: {
            Proyecto_Alcance_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};