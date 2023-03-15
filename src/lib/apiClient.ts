type ApiClient = <TResponse>(
  url: string,
  options: RequestInit
) => Promise<TResponse>;

const _api: ApiClient = async (url, options) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch {
    return Promise.reject();
  }
};

export const apiClient = {
  get: <TResponse>(url: string) => _api<TResponse>(url, { method: 'GET' }),

  post: <TResponse>(url: string, body: unknown) =>
    _api<TResponse>(url, {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  put: <TResponse>(url: string, body: unknown) =>
    _api<TResponse>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),

  delete: <TResponse>(url: string, body: unknown) =>
    _api<TResponse>(url, {
      method: 'DELETE',
      body: JSON.stringify(body),
    }),
};
