import axios from 'axios';
import pg from '../../package.json';

const Api = axios.create({
  baseURL: `${pg.proxy}`,
  timeout: 20000,
  headers: {},
});

const getHeader = () => ({
  Authorization: 'token',
});

Api.interceptors.request.use((config) => {
  config.headers = { ...getHeader(), ...config.headers };
  return config;
});

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);

export default Api;
