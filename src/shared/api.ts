import axios from "axios";

const apiBaseUrl = 'https://shadow-talk-api-gateway.onrender.com';

const defaultConfig = {
  baseURL: `${apiBaseUrl}`,
  headers: () => ({
    'Content-Type': 'application/json',
  }),
  error: {
    message: 'Something went wrong',
    status: 503
  },
};

const httpClient = <T>(method: string, url: string, variables?: any) =>
  new Promise<T>((resolve, reject) => {
    axios({
      url: `${defaultConfig.baseURL}${url}`,
      method,
      headers: defaultConfig.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        const errorMessage = error.response?.data?.error;
        if (errorMessage) {
          reject({
            message: errorMessage,
            status: error.response.status,
          });
        } else {
          reject(defaultConfig.error);
        }
      },
    );
  });

const api = {
  get: <T>(url: string, variables?: any) => httpClient<T>('get', url, variables),
  post: <T>(url: string, variables?: any) => httpClient<T>('post', url, variables),
  put: <T>(url: string, variables?: any) => httpClient<T>('put', url, variables),
  delete: <T>(url: string, variables?: any) => httpClient<T>('delete', url, variables),
};

export default api;