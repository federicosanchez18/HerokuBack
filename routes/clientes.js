const express = require('express');
const router = express.Router();
const sequelize = require('../database/database')
const ClientesController = require('../controllers/ClientesController');
import {deleteHandler,notFoundHandler,idNotFoundHandler} from '../handlers/Handlers';

//GET ALL

//sequelize.query("select CHARACTER_MAXIMUM_LENGTH from information_schema.columns where table_name = 'Clientes' AND COLUMN_NAME = 'Cliente_Codigo'")

router.get('/', (req, res) => {
    ClientesController.findAll().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

router.get('/descripciones', (req, res) => {
    ClientesController.findAllByDescription().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

//CREATE
router.post('/', (req, res) => {
    ClientesController.create(req).then(promise => {
        res.send('Creado Correctamente');
    })
    .catch(err => {
        res.status(500).send('No se ha podido crear. El código ya existe')
    })
});

//READ
//GET X by Y
router.get('/:codigo', (req, res) => {
    ClientesController.find(req.params.codigo).then(promise => {
        idNotFoundHandler(promise, req, res);
    })
    .catch(err => {
        res.json('Error en la solicitud')
    });
})

//UPDATE X by Y
//SE PUEDE ACTUALIZAR SOLO UN DATO O MAS
router.patch('/:codigo', (req, res) => {
    ClientesController.update(req, req.params.codigo).then(
        res.send('Actualizado Correctamente')
    )
    .catch(err => {
        res.status(500).send('No se ha podido actualizar. El código ingresado ya existe')
    })

    //UPDATE ... WHERE codigo = x
});

//DELETE
router.delete('/:codigo', (req, res) => {
    ClientesController.find(req.params.codigo).then(promise => {
        deleteHandler(promise, req, res);
    });
})

module.exports = router;