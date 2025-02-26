const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(response.status, error.message || 'An error occurred');
  }
  return response.json();
}

export const api = {
  async healthCheck() {
    const response = await fetch('/api/health');
    return handleResponse<{ message: string }>(response);
  },
  
  // Add more API methods here as needed
}; 