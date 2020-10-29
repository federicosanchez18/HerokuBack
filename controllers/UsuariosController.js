const Usuarios = require('../models/UsuariosModel');


function findAll() {
    var promise = Usuarios.findAll()
    return promise
};

async function findAllByDescription() {
    var promise = await Usuarios.findAll({
        attributes: ['Usuario_Nombre_Completo','Usuario_Key']
    })
    return promise
};

function find(codigo) {
    var promise = Usuarios.findOne({where: {Usuario_Codigo: codigo}})
    return promise
};

export {findAll,findAllByDescription,find};