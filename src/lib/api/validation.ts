import { ApiError } from './errors';
import { ERROR_MESSAGES } from '../constants';

export function validateResponse(response: Response): void {
  if (!response.ok) {
    throw new ApiError(
      response.status >= 500 ? ERROR_MESSAGES.SERVER : `Request failed with status ${response.status}`,
      response.status
    );
  }

  if (!response.body) {
    throw new ApiError(ERROR_MESSAGES.INVALID_RESPONSE);
  }
}

export function validateStreamContent(content: string | undefined): void {
  if (!content) {
    throw new ApiError(ERROR_MESSAGES.INVALID_RESPONSE);
  }
}