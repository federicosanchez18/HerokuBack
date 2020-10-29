const express = require('express');
const router = express.Router();
const RegionesController = require('../controllers/RegionesController');
import {deleteHandler,notFoundHandler,idNotFoundHandler} from '../handlers/Handlers';

//GET ALL

router.get('/', (req, res) => {
    RegionesController.findAll().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

router.get('/descripciones', (req, res) => {
    RegionesController.findAllByDescription().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

//CREATE
router.post('/', (req, res) => {
    RegionesController.create(req).then(promise => {
        res.json('Creado Correctamente');
    })
    .catch(err => {
        console.log(err)
    })
});

//READ
//GET All by Y
router.get('/:descripcion', (req, res) => {
    RegionesController.findAllByDescription().then(promise => {
        idNotFoundHandler(promise, req, res);
    })
    .catch(err => {
        res.status(404);
        res.json('Error en la solicitud')
    });
})

//READ
//GET X by Y
router.get('/:codigo', (req, res) => {
    RegionesController.find(req.params.codigo).then(promise => {
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
    RegionesController.update(req, req.params.codigo).then(
        res.json("Actualizado Correctamente")
    )
    .catch(err => {
        res.status(404);
        res.json(err)
    })
});

//DELETE
router.delete('/:codigo', (req, res) => {
    RegionesController.find(req.params.codigo).then(promise => {
        deleteHandler(promise, req, res);
    });
})

module.exports = router;