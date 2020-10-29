const express = require('express');
const router = express.Router();
const EmailCtrl = require('../controllers/MailController');

//email route
router.post('/email', EmailCtrl.sendEmail);