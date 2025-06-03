export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// async function handleResponse<T>(response: Response): Promise<T> {
//   if (!response.ok) {
//     const error = await response.json().catch(() => ({}));
//     throw new ApiError(response.status, error.message || 'An error occurred');
//   }
//   return response.json();
// }

export const api = {
  // Add more API methods here as needed
  // Example: 
  // async getSomeData(id: string) {
  //   const response = await fetch(`/api/data/${id}`);
  //   return handleResponse<{ someData: string }>(response);
  // }
}; 