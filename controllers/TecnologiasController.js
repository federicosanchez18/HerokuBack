const Tecnologias = require('../models/TecnologiasModel');

function findAll() {
    var promise = Tecnologias.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Tecnologias.findAll({
        attributes: ['Tecnologia_Descripcion','Tecnologia_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tecnologias.create({
        Tecnologia_Codigo: req.body.Tecnologia_Codigo,
        Tecnologia_Descripcion: req.body.Tecnologia_Descripcion,
        Tecnologia_Tipo: req.body.Tecnologia_Tipo,
        Tecnologia_Proveedor: req.body.Tecnologia_Proveedor,
        Tecnologia_Referente: req.body.Tecnologia_Referente,
        Tecnologia_Caso_Exito: req.body.Tecnologia_Caso_Exito,
        Tecnologia_Observacion: req.body.Tecnologia_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X',
    })
    return promise
};

function find(codigo) {
    var promise = Tecnologias.findOne({where: {Tecnologia_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Tecnologias.update({
        Tecnologia_Codigo: req.body.Tecnologia_Codigo,
        Tecnologia_Descripcion: req.body.Tecnologia_Descripcion,
        Tecnologia_Tipo: req.body.Tecnologia_Tipo,
        Tecnologia_Proveedor: req.body.Tecnologia_Proveedor,
        Tecnologia_Referente: req.body.Tecnologia_Referente,
        Tecnologia_Caso_Exito: req.body.Tecnologia_Caso_Exito,
        Tecnologia_Observacion: req.body.Tecnologia_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: req.body.Visible,
    }, {
        where: {
            Tecnologia_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Tecnologias.destroy({
        where: {
            Tecnologia_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};