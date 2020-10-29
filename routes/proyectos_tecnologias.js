const express = require('express');
const router = express.Router();
const Proyectos_TecnologiasController = require('../controllers/Proyectos_TecnologiasController');
import {deleteHandler,notFoundHandler,idNotFoundHandler} from '../handlers/Handlers';

//GET ALL

router.get('/', (req, res) => {
    Proyectos_TecnologiasController.findAll().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

//CREATE
router.post('/', (req, res) => {
    Proyectos_TecnologiasController.create(req).then(promise => {
        res.json('Creado Correctamente');
    })
    .catch(err => {
        console.log(err)
    })
});

//READ
//GET BY proyecto_codigo & tecnologia_codigo
router.get('/:tecnologiaKey', (req, res) => {
    Proyectos_TecnologiasController.find(req.params.tecnologiaKey).then(promise => {
        idNotFoundHandler(promise, req, res);
    })
    .catch(err => {
        res.json(err)
    });
})

//UPDATE X by Y
//SE PUEDE ACTUALIZAR UN SOLO DATO
router.patch('/:tecnologiaKey', (req, res) => {
    Proyectos_TecnologiasController.update(req, req.params.tecnologiaKey).then(
        res.json("Actualizado Correctamente")
    )
    .catch(err => {
        res.status(404);
        res.json(err)
    })
});

//DELETE
router.delete('/:tecnologiaKey', (req, res) => {
    Proyectos_TecnologiasController.find(req.params.tecnologiaKey).then(promise => {
        deleteHandler(promise, req, res);
    });
})

module.exports = router;