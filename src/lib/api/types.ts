export interface ApiConfig {
  url: string;
  token: string;
  model: string;
}

export interface StreamChunk {
  choices: Array<{
    delta: {
      content?: string;
    };
  }>;
}

export interface ApiError extends Error {
  status?: number;
  response?: string;
}