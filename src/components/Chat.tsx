import React from 'react';
import { Trash2, EyeOff, Download } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useChatStore } from '../store/chat';
import { downloadChatAsTxt } from '../lib/utils';

export function Chat() {
  const { messages, clearChat, isIncognito, toggleIncognito } = useChatStore();

  const handleDownload = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    downloadChatAsTxt(messages, `fmlgpt-chat-${timestamp}.txt`);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto max-w-4xl p-4">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-200">
              FMLgpt
            </h1>
            <div className="flex gap-4">
              <button
                onClick={toggleIncognito}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800"
                title={isIncognito ? 'Disable incognito mode' : 'Enable incognito mode'}
              >
                <EyeOff className={`h-5 w-5 ${isIncognito ? 'text-gray-300' : 'text-gray-500'}`} />
                Incognito
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800"
                title="Save chat as text file"
                disabled={messages.length === 0}
              >
                <Download className="h-5 w-5" />
                Save Chat
              </button>
              <button
                onClick={clearChat}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800"
                title="Clear chat history"
              >
                <Trash2 className="h-5 w-5" />
                Clear Chat
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic">
            MOSTLY uncensored text-gen AI for the everyday scoundrels, d*ckheads, scammers, and sudo hackers... Let's not forget the "special" people... aka rere's ;-) Temper your expectations. Donate for upgraded completely uncensored verison
          </p>
        </header>

        <main className="space-y-4 mb-8">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-8 bg-gray-900 rounded-lg">
              Start a conversation by typing a message below.
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
        </main>

        <footer className="sticky bottom-4">
          <ChatInput />
          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="text-xs text-gray-600">
              created by: izzollamx
            </div>
            <div className="text-xs font-mono text-yellow-500">
              Donate BTC: bc1qlfq50ht9845hedcakdtyp8ugfs45ct6zqrxuxx
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}