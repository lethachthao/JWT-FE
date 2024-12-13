import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Lấy giá trị từ biến môi trường
});

export default axiosInstance;
