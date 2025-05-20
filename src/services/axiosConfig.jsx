import axios from 'axios';

  const baseURL = process.env.NODE_ENV === "development"
    ? "" // use proxy from package.json during local dev
    : "https://mrtech-bgdhf9d2ekhadrgh.canadacentral-01.azurewebsites.net";
  const axiosConfig = axios.create({
    baseURL,
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json'
    }
  });
export default axiosConfig;
