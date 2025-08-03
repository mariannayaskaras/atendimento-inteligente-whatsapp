const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/analisar', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('http://ml-api:8000/predict', { message });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao comunicar com o serviço de ML' });
  }
});

app.listen(3001, () => console.log('Backend rodando na porta 3001'));
