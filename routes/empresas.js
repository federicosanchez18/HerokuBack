const express = require('express');
const router = express.Router();
const EmpresasController = require('../controllers/EmpresasController');
import {deleteHandler,notFoundHandler,idNotFoundHandler} from '../handlers/Handlers';

//GET ALL

router.get('/', (req, res) => {
    EmpresasController.findAll().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

router.get('/descripciones', (req, res) => {
    EmpresasController.findAllByDescription().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

//CREATE
router.post('/', (req, res) => {
    EmpresasController.create(req).then(promise => {
        res.json('Creado Correctamente');
    })
    .catch(err => {
        res.status(500).send('No se ha podido crear. El código ya existe')
    })
});

//READ
//GET X by Y
router.get('/:codigo', (req, res) => {
    EmpresasController.find(req.params.codigo).then(promise => {
        idNotFoundHandler(promise, req, res);
    })
    .catch(err => {
        res.status(404);
        res.json('Error en la solicitud')
    });
})

//UPDATE X by Y
//SE PUEDE ACTUALIZAR UN SOLO DATO
router.patch('/:codigo', (req, res) => {
    EmpresasController.update(req, req.params.codigo).then(
        res.json("Actualizado Correctamente")
    )
    .catch(err => {
        res.status(500).send('No se ha podido actualizar. El código ingresado ya existe')
    })
});

//DELETE
router.delete('/:codigo', (req, res) => {
    EmpresasController.find(req.params.codigo).then(promise => {
        deleteHandler(promise, req, res);
    });
})

module.exports = router;



