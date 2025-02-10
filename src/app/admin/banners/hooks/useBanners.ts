import apiClient from '@/utils/apiClient';
import { Banner } from '@/utils/type';
import { AxiosResponse } from 'axios';

// Hàm gọi API để lấy danh sách banner
export const getBanners = async (): Promise<Banner[]> => {
  const response: AxiosResponse<Banner[]> = await apiClient.get('/banners');
  return response.data;
};

//Gọi Api để tạo banner
export const createBanner = async (data: Banner): Promise<Banner> => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response: AxiosResponse<Banner> = await apiClient.post(
    '/banners',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  return response.data;
};

// Hàm gọi API để cập nhật banner
export const updateBanner = async (
  id: string,
  title: string,
  image: File | null
): Promise<Banner> => {
  const formData = new FormData();

  formData.append('title', title);
  if (image) {
    formData.append('image', image);
  }

  const response = await apiClient.post(`/banners/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// Hàm gọi API để xóa người dùng
export const deleteBanner = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/banners/${id}`);
  } catch (error) {
    console.error('Lỗi xóa banner:', error);
    throw error;
  }
};
