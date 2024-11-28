import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ChatState, Message, BotType } from '../types/chat';

const useStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isIncognito: false,
      currentBot: 'fmlgpt',
      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              ...message,
              id: crypto.randomUUID(),
              timestamp: Date.now(),
            },
          ],
        })),
      clearChat: () => set({ messages: [] }),
      toggleIncognito: () => set((state) => ({ isIncognito: !state.isIncognito })),
      switchBot: (bot) => set({ currentBot: bot, messages: [] }),
    }),
    {
      name: 'chat-storage',
      skipHydration: true,
      partialize: (state) => ({
        messages: state.isIncognito ? [] : state.messages,
        isIncognito: state.isIncognito,
        currentBot: state.currentBot,
      }),
    }
  )
);

export const useChatStore = () => useStore();