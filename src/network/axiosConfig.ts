import axios from 'axios';
import { ApiUrl } from './api';
import { store } from '../store/store';

const instance = axios.create({
  baseURL: ApiUrl,
  timeout: 3000,
});

instance.interceptors.request.use((config) => {
  const token = store.getState().session.token;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
