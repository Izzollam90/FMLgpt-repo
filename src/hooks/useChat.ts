import { useState } from 'react';
import { useChatStore } from '../store/chat';
import { sendChatMessage } from '../lib/api/chat';
import { processStream } from '../lib/api/stream';
import { ERROR_MESSAGES } from '../lib/constants';

export function useChat() {
  const [isLoading, setIsLoading] = useState(false);
  const { addMessage, currentBot } = useChatStore();

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    setIsLoading(true);
    addMessage({ role: 'user', content: content.trim() });

    try {
      const stream = await sendChatMessage(content, currentBot);
      if (!stream) {
        throw new Error(ERROR_MESSAGES.INVALID_RESPONSE);
      }

      const assistantMessage = await processStream(stream);
      if (assistantMessage.trim()) {
        addMessage({ role: 'assistant', content: assistantMessage });
      } else {
        throw new Error('No response received from the assistant');
      }
    } catch (error) {
      console.error('Chat error:', error);
      addMessage({
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading
  };
}