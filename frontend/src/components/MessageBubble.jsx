function MessageBubble({ from, text }) {
  const isUser = from === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`px-4 py-2 rounded-lg max-w-xs ${isUser
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'}`}>
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;
