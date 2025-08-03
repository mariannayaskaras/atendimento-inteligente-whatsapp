const axios = require('axios');
const { salvarAnalise } = require('../services/analise.service');

const analisarMensagem = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('http://ml-api:8000/predict', { message });

    await salvarAnalise(message, response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao analisar mensagem' });
  }
};

module.exports = { analisarMensagem };
