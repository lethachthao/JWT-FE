import apiClient from '@/utils/apiClient';
import { Product } from '@/utils/type';
import { AxiosResponse } from 'axios';

// Hàm gọi API để lấy danh sách banner
export const getProduct = async (): Promise<Product[]> => {
  const response: AxiosResponse<Product[]> = await apiClient.get('/products');
  return response.data;
};

export const createProduct = async (data: Product): Promise<Product> => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response: AxiosResponse<Product> = await apiClient.post(
    '/products',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  return response.data;
};
