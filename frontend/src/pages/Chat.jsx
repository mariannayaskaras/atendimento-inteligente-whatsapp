import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import MessageBubble from '../components/MessageBubble';
import { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! Sou seu assistente inteligente do WhatsApp. Como posso ajudar?' }
  ]);

  const sendMessage = (text) => {
    const newMessages = [...messages, { from: 'user', text }];
    setMessages(newMessages);
    // Aqui você poderá conectar com a API ou Baileys futuramente
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-h-screen">
      <ChatHeader />
      <div className="flex flex-col gap-2 mb-4 mt-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} from={msg.from} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
}

export default Chat;
