import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const apiClient = axios.create({
  baseURL: `${BASE_URL}`,
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