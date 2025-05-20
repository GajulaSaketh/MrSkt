import axios from 'axios';

export const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'https://mrtech-bgdhf9d2ekhadrgh.canadacentral-01.azurewebsites.net',
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return instance;
};
