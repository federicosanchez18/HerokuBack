const Monedas = require('../models/MonedasModel');


function findAll() {
    var promise = Monedas.findAll()
    return promise
};

async function findAllByCodigo() {
    var promise = await Monedas.findAll({
        attributes: ['Moneda_Codigo','Moneda_Key']
    })
    return promise
};

export {findAll,findAllByCodigo};