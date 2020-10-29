const express = require('express');
const router = express.Router();
const MonedasController = require('../controllers/MonedasController');
import {notFoundHandler} from '../handlers/Handlers';

//GET ALL

router.get('/', (req, res) => {
    MonedasController.findAllByCodigo().then(promise => {
        notFoundHandler(promise, req, res);
    });
});

module.exports = router;