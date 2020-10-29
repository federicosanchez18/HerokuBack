/*
import {expect} from 'chai';
const sequelize = require('../config/database');

describe('Creo un Proyecto y se encuenta en la base', function () {
    it('Deberia decir conectado correcamente a la base', function () {
    sequelize.sync({force: false})
    var proyectos = require('../models/ProyectosModel')
    proyectos.create({
        Proyecto_Unidad_Negocio: 1,
        Proyecto_Region: 1,
        Proyecto_Facturable: 1,
        Proyecto_Tipo: 1,
        Proyecto_Codigo: "Prueba",
        Proyecto_Descripcion: "Esto es una prueba de una carga de Proyecto",
        Proyecto_Importancia: 1,
        Proyecto_Cliente: 1,
        Proyecto_Moneda: 1,
        Proyecto_Responsable: 1,
        Proyecto_Vendedor: 1,
        Proyecto_Referente_Comercial: "Referente Comercial Prueba",
        Proyecto_Referente_Comercial_Mail: "Referente Comercial Prueba Mail",
        Proyecto_Referente_Tecnico: "Referente Tecnico Prueba",
        Proyecto_Referente_Tecnico_Mail: "Referente Tecnico Prueba Mail",
        Proyecto_Codigo_Externo: "Codigo Externo Prueba",
        Proyecto_Observacion: "Observaciones",
        Usuario_Creacion: 1,
        Usuario_Modificacion: 1,
        Fecha_Creacion: new Date(),//DATE NOW,
        Fecha_Modificacion: new Date(), //DATE NOW,
    })

    const proyectoRecuperado = proyectos.findOne({where: {Proyecto_Codigo: "Prueba"}})

    expect(proyectoRecuperado.Proyecto_Codigo).to.equal("Prueba")
  })
})
*/