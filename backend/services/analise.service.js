const Analise = require('../models/Analise');

const salvarAnalise = async (mensagem, resultado) => {
  return await Analise.create({
    mensagem,
    intencao: resultado.intencao,
    confianca: resultado.confianca
  });
};

module.exports = { salvarAnalise };
