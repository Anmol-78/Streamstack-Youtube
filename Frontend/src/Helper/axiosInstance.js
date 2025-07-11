import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('session-auth-access');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
