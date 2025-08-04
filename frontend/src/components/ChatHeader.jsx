import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ChatHeader() {
  const [dark, setDark] = useState(true);
  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <header className="flex justify-between items-center border-b pb-3 mb-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Atendimento Inteligente</h1>
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
        <button onClick={toggle} className="text-xl text-yellow-500">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;
