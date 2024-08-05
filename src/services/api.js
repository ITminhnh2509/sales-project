import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66a6fa7223b29e17a1a3dd75.mockapi.io',
});

export default api;
