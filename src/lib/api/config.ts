import { API_ENDPOINTS } from '../constants';
import type { BotType } from '../../types/chat';

export function getApiConfig(botType: BotType) {
  return {
    url: API_ENDPOINTS[botType],
    token: import.meta.env.VITE_HUGGINGFACE_API_KEY,
    model: 'tgi'
  };
}