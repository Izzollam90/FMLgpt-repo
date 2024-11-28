import { StreamChunk } from './types';
import { validateStreamContent } from './validation';
import { ERROR_MESSAGES } from '../constants';
import { createApiError } from './errors';

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
            const jsonStr = line.slice(6).trim();
            if (jsonStr === '[DONE]') continue;
            
            const data = JSON.parse(jsonStr) as StreamChunk;
            const content = data.choices[0]?.delta?.content;
            if (content) {
              message += content;
            }
          } catch (e) {
            console.warn('Error parsing stream chunk:', e);
          }
        }
      }
    }

    return message;
  } catch (error) {
    throw createApiError(error);
  } finally {
    reader.releaseLock();
  }
}