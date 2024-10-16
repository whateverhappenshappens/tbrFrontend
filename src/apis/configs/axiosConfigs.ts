import axios, { AxiosError } from "axios";

export const api = axios.create({
  withCredentials: true,
  baseURL:"https://www.techbairn.live/api",
  // baseURL:"http://3.108.165.88:8080/",
  
});

// Token refresh logic
// api.interceptors.request.use(
//   async (config) => {
//     console.log("request interceptor")
//     const accessToken = localStorage.getItem('access-token');
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

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
