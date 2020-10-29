const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
import {notFoundHandler,idNotFoundHandler} from '../handlers/Handlers';

//GET ALL

router.get('/', (req, res) => {
    UsuariosController.findAll().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

router.get('/descripciones', (req, res) => {
    UsuariosController.findAllByDescription().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

//READ
//GET X by Y
router.get('/:codigo', (req, res) => {
    UsuariosController.find(req.params.codigo).then(promise => {
        idNotFoundHandler(promise, req, res);
    })
    .catch(err => {
        res.status(404);
        res.json('Error en la solicitud')
    });
})

module.exports = router;