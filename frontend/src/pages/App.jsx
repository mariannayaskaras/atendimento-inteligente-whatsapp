import { Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
