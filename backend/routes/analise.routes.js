const express = require('express');
const router = express.Router();
const { analisarMensagem } = require('../controllers/analise.controller');

router.post('/analisar', analisarMensagem);

module.exports = router;
