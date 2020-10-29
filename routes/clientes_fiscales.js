const express = require('express');
const router = express.Router();
const Clientes_FiscalesController = require('../controllers/Clientes_FiscalesController');
import {deleteHandler,notFoundHandler,idNotFoundHandler} from '../handlers/Handlers';

//GET ALL

router.get('/', (req, res) => {
    Clientes_FiscalesController.findAll().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

router.get('/descripciones', (req, res) => {
    Clientes_FiscalesController.findAllByDescription().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

//CREATE
router.post('/', (req, res) => {
    Clientes_FiscalesController.create(req).then(promise => {
        res.send('Creado Correctamente');
    })
    .catch(err => {
        res.status(500).send('No se ha podido crear. El cliente fiscal ya existe')
    })
});

//READ
//GET X by Y
router.get('/:codigo', (req, res) => {
    Clientes_FiscalesController.find(req.params.codigo).then(promise => {
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
    Clientes_FiscalesController.update(req, req.params.codigo).then(
        res.send('Actualizado Correctamente')
    )
    .catch(err => {
        res.status(500).send('No se ha podido actualizar. El código ingresado ya existe')
    })
});

//DELETE
router.delete('/:codigo', (req, res) => {
    Clientes_FiscalesController.find(req.params.codigo).then(promise => {
        deleteHandler(promise, req, res);
    });
})

module.exports = router;