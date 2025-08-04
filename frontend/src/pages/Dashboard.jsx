import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import StatsCard from '../components/StatsCard';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Dashboard() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/historico')
      .then(res => res.json())
      .then(data => setDados(data.reverse()))
      .catch(err => console.error('Erro ao buscar histórico:', err));
  }, []);

  const chartData = {
    labels: dados.map((item, index) => `#${index + 1}`),
    datasets: [{
      label: 'Confiança (%)',
      data: dados.map(item => item.confianca * 100),
      backgroundColor: 'rgba(59, 130, 246, 0.7)'
    }]
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <Link to="/" className="text-blue-500 hover:underline">Voltar para o Chat</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatsCard label="Total de Análises" value={dados.length} />
        <StatsCard label="Última Intenção" value={dados[0]?.intencao || '-'} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">Confiança nas análises</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
