import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from './useCategory';
import { Category } from '@/utils/type';
import { message } from 'antd';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};

export const useCreateCategory = () => {
  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Category) => createCategory(data),
    onSuccess: async () => {
      await QueryClient.invalidateQueries({ queryKey: ['categories'] });
      message.success('Tạo category thành công');
    },
    onError: error => {
      console.error(error);
      message.error('Tạo banner thất bại');
    },
  });

  return mutation;
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: {
      id: string;
      name: string;
      banner: File | null;
      logo: File | null;
    }) =>
      updateCategory(
        userData.id,
        userData.name,
        userData.banner,
        userData.logo
      ),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['categories'] });
      message.success('✅ Cập nhật Category thành công!');
    },
    onError: error => {
      console.error(' Lỗi khi cập nhật Category:', error);
      message.error('Lỗi khi cập nhật Category, vui lòng thử lại.');
    },
  });
};

// Hook sử dụng React Query để xóa người dùng
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['categories'] });
      message.success(' Xóa category thành công!');
    },
    onError: error => {
      console.error('Lỗi khi xóa category:', error);
      message.error('Lỗi khi xóa category, vui lòng thử lại.');
    },
  });
};
