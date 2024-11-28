import React from 'react';
import { Bot, Copy, Share2, User } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  const copyMessage = () => {
    navigator.clipboard.writeText(message.content);
  };

  const shareMessage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: message.content,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <div
      className={cn(
        'flex gap-4 p-4 rounded-lg',
        isUser ? 'bg-gray-900' : 'bg-gray-800'
      )}
    >
      <div className="flex-shrink-0">
        {isUser ? (
          <User className="h-6 w-6 text-gray-400" />
        ) : (
          <Bot className="h-6 w-6 text-gray-400" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-gray-300">{message.content}</p>
        <div className="flex gap-2">
          <button
            onClick={copyMessage}
            className="p-1 hover:bg-gray-700 rounded"
            title="Copy message"
          >
            <Copy className="h-4 w-4 text-gray-500" />
          </button>
          <button
            onClick={shareMessage}
            className="p-1 hover:bg-gray-700 rounded"
            title="Share message"
          >
            <Share2 className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}