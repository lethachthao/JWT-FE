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

// Hàm gọi API để cập nhật banner
export const updateCategory = async (
  id: string,
  data: {
    name: string;
    price: number;
    description: string;
    image?: File | null; // Nếu không có hình ảnh, có thể bỏ qua trường này
  }
): Promise<Product> => {
  // Tạo object JSON, loại bỏ image nếu không có
  const requestData: Partial<Product> = {
    id: id,
    name: data.name,
    price: data.price,
    description: data.description,
  };

  if (data.image) {
    requestData.image = data.image;
  }

  const response: AxiosResponse<Product> = await apiClient.put(
    `/categories/${id}`,
    requestData,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return response.data;
};
