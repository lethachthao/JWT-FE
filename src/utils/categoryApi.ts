import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import { Category } from './type';
import apiClient from './apiClient';
import { App } from 'antd';
import {
  deleteCategory,
  editCategory,
} from '@/app/admin/categories/hooks/useCategories';

type EditCategoryParams = {
  id: string;
  data: Category;
};

export const useCategories = (): UseQueryResult<
  { success: boolean; data: Category[] },
  Error
> => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await apiClient.get<{
        success: boolean;
        data: Category[];
      }>('/categories');
      return response.data; // Trả về toàn bộ đối tượng
    },
  });
};

// Hook để tạo mới danh mục
export const useCreateCategory = (): UseMutationResult<
  Category, // Kết quả trả về (Category vừa được tạo)
  Error, // Lỗi có thể xảy ra
  Category // Dữ liệu cần gửi
> => {
  return useMutation({
    mutationFn: async (newCategory: Category) => {
      const response = await apiClient.post<Category>(
        '/categories',
        newCategory
      );
      return response.data; // Trả về danh mục mới được tạo
    },
  });
};

export const useDeleteCategory = () => {
  const { message } = App.useApp(); // Để sử dụng thông báo từ Ant Design
  const queryClient = useQueryClient(); // Để invalidate lại query khi xóa thành công

  const mutationResults = useMutation({
    mutationFn: (id: string) => {
      return deleteCategory(id); // Gọi hàm xóa category
    },
    onSuccess: async () => {
      // Sau khi xóa xong, invalidate lại query để lấy dữ liệu mới nhất từ backend
      await queryClient.invalidateQueries({ queryKey: ['categories'] });
      message.success('Xóa danh mục thành công!'); // Thông báo thành công
    },
    onError: () => {
      message.error('Xóa danh mục không thành công!'); // Thông báo lỗi
    },
  });

  return mutationResults;
};

export const useEditCategory = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const mutationResults = useMutation({
    // Hàm thực thi mutation
    mutationFn: ({ id, data }: EditCategoryParams) => {
      return editCategory(id, data);
    },
    // Xử lý khi mutation thành công
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['categories'] });
      message.success('Cập nhật danh mục thành công!');
    },
    // Xử lý khi mutation thất bại
    onError: () => {
      message.error('Cập nhật danh mục không thành công!');
    },
  });

  return mutationResults;
};
