import { Category } from '../../../../utils/type';
import apiClient from '@/utils/apiClient';
import { AxiosResponse } from 'axios';

export const getCategories = async (): Promise<AxiosResponse<Category[]>> => {
  return await apiClient.get<Category[]>('/categories');
};

export const createCategory = async (
  payload: Category
): Promise<AxiosResponse<Category>> => {
  return await apiClient.post<Category>('/categories', payload);
};

export const deleteCategory = async (
  id: string
): Promise<AxiosResponse<void>> => {
  return await apiClient.delete(`/categories/${id}`);
};

// Cập nhật category theo id
export const editCategory = async (
  id: string,
  data: Category
): Promise<AxiosResponse<Category>> => {
  return await apiClient.put<Category>(`/categories/${id}`, data, {
    headers: {
      'Content-Type': 'application/json', // Điều chỉnh nếu có yêu cầu headers khác
    },
  });
};
