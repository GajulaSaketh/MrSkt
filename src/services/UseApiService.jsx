import axios from 'axios';

export const UseApiService = () => {
 // const axios = useAxiosInstance();
  // Set your base URL here
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "https://localhost:7062" 
      : "https://mrtech-bgdhf9d2ekhadrgh.canadacentral-01.azurewebsites.net";

  // Create a local axios instance with the baseURL
  const axiosInstance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const apiService = {
    get: async (endpoint) => {
      try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    post: async (endpoint, data) => {
      try {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    put: async (endpoint, data) => {
      try {
        const response = await axiosInstance.put(endpoint, data);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    delete: async (endpoint) => {
      try {
        const response = await axiosInstance.delete(endpoint);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },

    patch: async (endpoint, data) => {
      try {
        const response = await axiosInstance.patch(endpoint, data);
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
