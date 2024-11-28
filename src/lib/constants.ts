export const API_ENDPOINTS = {
  fmlgpt: 'https://kc6yg1bt92e5q1ln.us-east-1.aws.endpoints.huggingface.cloud/v1/chat/completions',
} as const;

export const ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your connection and try again.',
  SERVER: 'Server error. Please try again later.',
  INVALID_RESPONSE: 'Invalid response from server.',
  STREAM_ERROR: 'Error processing response stream.',
} as const;