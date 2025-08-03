import React, { useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState(null);

  const analisar = async () => {
    const res = await fetch('http://localhost:3001/analisar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: mensagem })
    });
    const data = await res.json();
    setResposta(data);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Classificador de Intenção</h1>
      <input
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite uma mensagem"
        style={{ width: '300px', marginRight: '1rem' }}
      />
      <button onClick={analisar}>Analisar</button>

      {resposta && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Resultado:</h2>
          <p><strong>Intenção:</strong> {resposta.intencao}</p>
          <p><strong>Confiança:</strong> {resposta.confianca}</p>
        </div>
      )}
    </div>
  );
}

export default App;
