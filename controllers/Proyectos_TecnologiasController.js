const Proyectos_Tecnologias = require('../models/Proyectos_TecnologiasModel');


function findAll() {
    var promise = Proyectos_Tecnologias.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos_Tecnologias.create({
        Proyecto_Tecnologia_Proyecto: req.body.Proyecto_Tecnologia_Proyecto,
        Proyecto_Tecnologia_Tecnologia: req.body.Proyecto_Tecnologia_Tecnologia,
        Proyecto_Tecnologia_Porcentaje: req.body.Proyecto_Tecnologia_Porcentaje,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(tecnologiaKey) {
    var promise = Proyectos_Tecnologias.findOne({where: {Proyecto_Tecnologia_Key: tecnologiaKey}})
    return promise
};

function update(req, tecnologiaKey) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Proyectos_Tecnologias.update({
        Proyecto_Tecnologia_Proyecto: req.body.Proyecto_Tecnologia_Proyecto,
        Proyecto_Tecnologia_Tecnologia: req.body.Proyecto_Tecnologia_Tecnologia,
        Proyecto_Tecnologia_Porcentaje: req.body.Proyecto_Tecnologia_Porcentaje,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Proyecto_Tecnologia_Key: tecnologiaKey,
        }
    })
    return promise
};

function destroy(tecnologiaKey) {
    var promise = Proyectos_Tecnologias.destroy({
        where: {
            Proyecto_Tecnologia_Key: tecnologiaKey,
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};