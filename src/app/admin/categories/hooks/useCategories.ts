import { Category } from '../../../../utils/type';
import apiClient from '@/utils/apiClient';
import { AxiosResponse } from 'axios';

// Hàm gọi API để lấy danh sách banner
export const getCategories = async (): Promise<Category[]> => {
  const response: AxiosResponse<Category[]> =
    await apiClient.get('/categories');
  return response.data;
};
