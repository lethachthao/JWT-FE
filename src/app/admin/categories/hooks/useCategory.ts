import { Category } from '../../../../utils/type';
import apiClient from '@/utils/apiClient';
import { AxiosResponse } from 'axios';

// Hàm gọi API để lấy danh sách banner
export const getCategories = async (): Promise<Category[]> => {
  const response: AxiosResponse<Category[]> =
    await apiClient.get('/categories');
  return response.data;
};

export const createCategory = async (data: Category): Promise<Category> => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response: AxiosResponse<Category> = await apiClient.post(
    '/categories',
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
  name: string,
  logo: File | null,
  banner: File | null
): Promise<Category> => {
  const formData = new FormData();

  formData.append('name', name);
  if (logo) {
    formData.append('logo', logo);
  }
  if (banner) {
    formData.append('banner', banner);
  }

  const response = await apiClient.post(`/categories/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// Hàm gọi API để xóa người dùng
export const deleteCategory = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/categories/${id}`);
  } catch (error) {
    console.error('Lỗi xóa banner:', error);
    throw error;
  }
};
