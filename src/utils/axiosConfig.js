// src/utils/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'https://96q7lsd1-5000.inc1.devtunnels.ms/api/v1/',
    baseURL: 'http://127.0.0.1:8000/api/v1/',  // Your FastAPI URL
    headers: {
        'Content-Type': 'application/json',
    }
});

// Optionally add interceptors for request and response
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosInstance;
