import axios, { AxiosError } from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const api = axios.create({
  withCredentials: true,
  baseURL:BASE_URL,
});

// Error handling
api.interceptors.response.use(
  (response) => {
    console.log("response interceptor");
    return response;
  },
  (error: AxiosError) => {
    console.log("response interceptor error");
    const statusCode = error.response?.status;
    if (statusCode && statusCode !== 401) {
      console.error(error);
    }
    return Promise.reject(error);
  }
);
