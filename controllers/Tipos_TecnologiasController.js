const Tipos_Tecnologias = require('../models/Tipos_TecnologiasModel');


function findAll() {
    var promise = Tipos_Tecnologias.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tipos_Tecnologias.create({
        Tipo_Tecnologia_Codigo: req.body.Tipo_Tecnologia_Codigo,
        Tipo_Tecnologia_Descripcion: req.body.Tipo_Tecnologia_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Tipos_Tecnologias.findOne({where: {Tipo_Tecnologia_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tipos_Tecnologias.update({
        Tipo_Tecnologia_Codigo: req.body.Tipo_Tecnologia_Codigo,
        Tipo_Tecnologia_Descripcion: req.body.Tipo_Tecnologia_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible
    }, {
        where: {
            Tipo_Tecnologia_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Tipos_Tecnologias.destroy({
        where: {
            Tipo_Tecnologia_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};