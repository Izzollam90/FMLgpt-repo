import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Message } from '../types/chat';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatChatForDownload(messages: Message[]): string {
  return messages
    .map(msg => `[${msg.role.toUpperCase()}]: ${msg.content}\n`)
    .join('\n');
}

export function downloadChatAsTxt(messages: Message[], filename = 'chat-history.txt') {
  const content = formatChatForDownload(messages);
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function streamChat(message: string) {
  try {
    const response = await fetch('https://kc6yg1bt92e5q1ln.us-east-1.aws.endpoints.huggingface.cloud/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'tgi',
        messages: [{ role: 'user', content: message }],
        temperature: 0,
        max_tokens: 700,
        stream: true
      })
    });

    return response.body;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}