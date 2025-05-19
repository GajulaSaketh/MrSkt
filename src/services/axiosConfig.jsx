import axios from 'axios';

export const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: '/',
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return instance;
};
