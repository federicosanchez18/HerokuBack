const express = require('express');
const router = express.Router();
const HorasController = require('../controllers/HorasController');
import {notFoundHandler,deleteHandler} from '../handlers/Handlers';

router.get('/:usuario/:date', (req, res) => {
    HorasController.findAll(req.params.usuario,req.params.date).then(promise => {
        notFoundHandler(promise, req, res);
    });
});

router.post('/', (req, res) => {
    HorasController.create(req).then(promise => {
        res.json('Creado Correctamente');
    })
    .catch(err => {
        console.log(err)
    })
});

router.patch('/', (req, res) => {
    HorasController.update(req).then(
        res.json("Actualizado Correctamente")
    )
    .catch(err => {
        res.status(404);
        res.json(err)
    })
});

router.delete('/:usuario/:date', (req, res) => {
    HorasController.destroy(req.params.usuario,req.params.date).then( 
        res.json("eliminado correctamente")
    )
})
module.exports = router;