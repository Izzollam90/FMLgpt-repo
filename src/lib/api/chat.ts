import { getApiConfig } from './config';
import { processStream } from './stream';
import { validateResponse } from './validation';
import { createApiError } from './errors';
import type { BotType } from '../../types/chat';

export async function sendChatMessage(message: string, botType: BotType) {
  const config = getApiConfig(botType);
  
  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.token}`
      },
      body: JSON.stringify({
        model: 'tgi',
        messages: [{ role: 'user', content: message }],
        temperature: 0,
        max_tokens: 700,
        stream: true
      })
    });

    validateResponse(response);
    return response.body;
  } catch (error) {
    throw createApiError(error);
  }
}