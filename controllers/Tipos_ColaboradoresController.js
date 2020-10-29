const Tipos_Colaboradores = require('../models/Tipos_ColaboradoresModel');


function findAll() {
    var promise = Tipos_Colaboradores.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tipos_Colaboradores.create({
        Tipo_Colaborador_Codigo: req.body.Tipo_Colaborador_Codigo,
        Tipo_Colaborador_Descripcion: req.body.Tipo_Colaborador_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Tipos_Colaboradores.findOne({where: {Tipo_Colaborador_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tipos_Colaboradores.update({
        Tipo_Colaborador_Codigo: req.body.Tipo_Colaborador_Codigo,
        Tipo_Colaborador_Descripcion: req.body.Tipo_Colaborador_Descripcion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible
    }, {
        where: {
            Tipo_Colaborador_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Tipos_Colaboradores.destroy({
        where: {
            Tipo_Colaborador_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};