import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../hooks/useChat';

export function ChatInput() {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput('');
    await sendMessage(message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-gray-900 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-gray-800 text-gray-200 rounded-lg px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 disabled:opacity-50"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}