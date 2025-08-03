
const mongoose = require('mongoose');

const AnaliseSchema = new mongoose.Schema({
  mensagem: String,
  intencao: String,
  confianca: Number
});

module.exports = mongoose.model('Analise', AnaliseSchema);
