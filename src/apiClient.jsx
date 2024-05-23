import axios from 'axios';
import { BASE_URL } from './utils';

const BASE_URL_API = BASE_URL;
const apiClient = axios.create({
  baseURL: `${BASE_URL_API}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;