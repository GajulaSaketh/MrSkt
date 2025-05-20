import { useAxiosInstance } from './axiosConfig';
import axios from '../services/useAxiosInstance';

export const UseApiService = () => {
 // const axios = useAxiosInstance();

  const apiService = {
    get: async (endpoint) => {
      try {
        const response = await axios.get(endpoint);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    post: async (endpoint, data) => {
      try {
        const response = await axios.post(endpoint, data);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    put: async (endpoint, data) => {
      try {
        const response = await axios.put(endpoint, data);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    delete: async (endpoint) => {
      try {
        const response = await axios.delete(endpoint);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    patch: async (endpoint, data) => {
      try {
        const response = await axios.patch(endpoint, data);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    }
  };

  const handleError = (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          invokeLoginPopup();
          break;
        case 403:
          console.error('Access forbidden');
          break;
        case 404:
          console.error('Resource not found');
          break;
        default:
          console.error('Server error:', error.response.status);
      }
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  };

  const invokeLoginPopup = () => {
    const loginpopups = document.querySelectorAll('.btnloginpopup');
    loginpopups.forEach(link => link.click());
  };

  return apiService;
};
