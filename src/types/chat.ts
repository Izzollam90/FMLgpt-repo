export type BotType = 'fmlgpt';

export interface Message {
  id?: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp?: number;
}

export interface ChatResponse {
  choices: Array<{
    delta: {
      content?: string;
    };
  }>;
}

export interface ChatState {
  messages: Message[];
  isIncognito: boolean;
  currentBot: BotType;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
  toggleIncognito: () => void;
  switchBot: (bot: BotType) => void;
}