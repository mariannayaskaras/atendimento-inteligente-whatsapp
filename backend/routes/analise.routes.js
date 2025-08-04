const express = require('express');
const router = express.Router();
const Analise = require('../models/Analise');

// Rota de histórico
router.get('/historico', async (req, res) => {
  const dados = await Analise.find().sort({ _id: -1 }).limit(10);
  res.json(dados);
});

module.exports = router;
