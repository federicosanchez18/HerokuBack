const express = require('express');
const router = express.Router();


// Ruta del back inicio
router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;