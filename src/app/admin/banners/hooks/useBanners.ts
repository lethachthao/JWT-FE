import apiClient from '@/utils/apiClient';
import { AxiosResponse } from 'axios';

// Định nghĩa kiểu dữ liệu cho Banner
export interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

// Hàm gọi API để lấy danh sách banner
export const getBanners = async (): Promise<Banner[]> => {
  const response: AxiosResponse<Banner[]> = await apiClient.get('/banners');
  return response.data;
};

// Hàm gọi API để tạo banner mới
export const createBanner = async (banner: Banner): Promise<Banner> => {
  const response: AxiosResponse<Banner> = await apiClient.post(
    '/banners',
    banner
  );
  return response.data;
};

// Hàm gọi API để cập nhật banner
export const updateBanner = async (banner: Banner): Promise<Banner> => {
  const response: AxiosResponse<Banner> = await apiClient.put(
    `/banners/${banner.id}`,
    banner
  );
  return response.data;
};

// Hàm gọi API để xóa banner
export const deleteBanner = async (bannerId: string): Promise<void> => {
  await apiClient.delete(`/banners/${bannerId}`);
};
