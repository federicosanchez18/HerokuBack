const Feriados = require('../models/FeriadosModel');
import Regiones from '../models/RegionesModel';

function findAll() {
    var promise = Feriados.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Feriados.create({
        Feriado_Region: req.body.Feriado_Region,
        Feriado_Tiempo: req.body.Feriado_Tiempo,
        Feriado_Fecha: req.body.Feriado_Fecha,
        Feriado_Descripcion: req.body.Feriado_Descripcion,
        Feriado_Laborable: req.body.Feriado_Laborable,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    })
    return promise
};

function find(region) {
    var promise = Feriados.findAll({
        include : [
            {
            raw: true,
            model: Regiones,
            attributes:['Region_Descripcion'],
            as: 'Region'},
        ],
        where: {Feriado_Region: region}
    })
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Feriados.update({
        Feriado_Region: req.body.Feriado_Region,
        Feriado_Tiempo: req.body.Feriado_Tiempo,
        Feriado_Fecha: req.body.Feriado_Fecha,
        Feriado_Descripcion: req.body.Feriado_Descripcion,
        Feriado_Laborable: req.body.Feriado_Laborable,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
    }, {
        where: {
            Feriado: codigo //VER CON QUE ACCEDER
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Feriados.destroy({
        where: {
            Feriado: codigo //VER CON QUE ACCEDER
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};