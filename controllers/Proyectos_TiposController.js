const Proyectos_Tipos = require('../models/Proyectos_TiposModel');


function findAll() {
    var promise = Proyectos_Tipos.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Proyectos_Tipos.findAll({
        attributes: ['Proyecto_Tipo_Descripcion','Proyecto_Tipo_Key',
                     'Proyecto_Tipo_Grupo','Proyecto_Tipo_Beneficio']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos_Tipos.create({
        Proyecto_Tipo_Codigo: req.body.Proyecto_Tipo_Codigo,
        Proyecto_Tipo_Descripcion: req.body.Proyecto_Tipo_Descripcion,
        Proyecto_Tipo_Grupo: req.body.Proyecto_Tipo_Grupo,
        Proyecto_Tipo_Beneficio: req.body.Proyecto_Tipo_Beneficio,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(codigo) {
    var promise = Proyectos_Tipos.findOne({where: {Proyecto_Tipo_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos_Tipos.update({
        Proyecto_Tipo_Codigo: req.body.Proyecto_Tipo_Codigo,
        Proyecto_Tipo_Descripcion: req.body.Proyecto_Tipo_Descripcion,
        Proyecto_Tipo_Grupo: req.body.Proyecto_Tipo_Grupo,
        Proyecto_Tipo_Beneficio: req.body.Proyecto_Tipo_Beneficio,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Proyecto_Tipo_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Proyectos_Tipos.destroy({
        where: {
            Proyecto_Tipo_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};