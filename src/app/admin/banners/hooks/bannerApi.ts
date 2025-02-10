import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createBanner,
  deleteBanner,
  getBanners,
  updateBanner,
} from './useBanners';
import { Banner } from '@/utils/type';
import { message } from 'antd';

// Hook lấy danh sách banners
export const useBanners = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
  });
};

//Hook tạo banner
export const useCreateBanner = () => {
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: Banner) => createBanner(data),
    onSuccess: async () => {
      await QueryClient.invalidateQueries({ queryKey: ['banners'] });
      message.success('Tạo banner thành công');
    },
    onError: error => {
      console.log('Error creating banner:', error);
      message.error('Tạo banner thất bại');
    },
  });
  return mutation;
};

// Hook để cập nhật banner
export const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      id,
      title,
      image,
    }: {
      id: string;
      title: string;
      image: File | null;
    }) => updateBanner(id, title, image),

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['banners'] });
      message.success('Cập nhật banner thành công');
    },
    onError: error => {
      console.log('Error creating banner:', error);
      message.error('Cập nhật banner thất bại');
    },
  });

  return mutation;
};

// Hook sử dụng React Query để xóa người dùng
export const useDeleteBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteBanner(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['banners'] });
      message.success(' Xóa banner thành công!');
    },
    onError: error => {
      console.error('Lỗi khi xóa banner:', error);
      message.error('Lỗi khi xóa banner, vui lòng thử lại.');
    },
  });
};
