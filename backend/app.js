// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const analiseRoutes = require('./routes/analise.routes');

const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Conectado ao MongoDB');
}).catch(err => {
  console.error('❌ Erro ao conectar ao MongoDB:', err);
});

// Uso das rotas de análise
app.use('/', analiseRoutes);

// Inicia o servidor
app.listen(3001, () => console.log('🚀 Backend rodando na porta 3001'));
