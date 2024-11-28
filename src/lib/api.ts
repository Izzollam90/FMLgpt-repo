import { Message, BotType } from '../types/chat';

export interface ChatResponse {
  choices: Array<{
    delta: {
      content?: string;
    };
  }>;
}

const API_CONFIGS = {
  fmlgpt: {
    url: 'https://kc6yg1bt92e5q1ln.us-east-1.aws.endpoints.huggingface.cloud/v1/chat/completions',
    token: import.meta.env.VITE_HUGGINGFACE_API_KEY,
  },
  fmlcodegpt: {
    url: 'https://api.aws.amazon.com/v1/sagemaker/endpoints/wizardlm-code',
    token: import.meta.env.VITE_SAGEMAKER_API_KEY,
  },
};

export async function sendChatMessage(message: string, botType: BotType) {
  const config = API_CONFIGS[botType];
  
  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.token}`
      },
      body: JSON.stringify({
        model: botType === 'fmlgpt' ? 'tgi' : 'wizardlm-code',
        messages: [{ role: 'user', content: message }],
        temperature: 0,
        max_tokens: 700,
        stream: true
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.body;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function processStream(stream: ReadableStream<Uint8Array>): Promise<string> {
  const reader = stream.getReader();
  let message = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = new TextDecoder().decode(value);
      const lines = chunk.split('\n').filter(line => line.trim() !== '');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const jsonStr = line.slice(6);
            const data = JSON.parse(jsonStr) as ChatResponse;
            message += data.choices[0]?.delta?.content || '';
          } catch (e) {
            console.warn('Error parsing JSON from stream:', e);
            continue;
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }

  return message;
}