import axios from 'axios';

export const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: '/', // Optional: set base URL here
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return instance;
};
