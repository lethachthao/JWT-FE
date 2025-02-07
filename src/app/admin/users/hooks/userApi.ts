import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createUser, deleteUser, getUsers, updateUser } from './useUsers';
import { User } from '@/utils/type';
import { message } from 'antd';

// Hook sử dụng React Query để lấy dữ liệu người dùng
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
// Hook sử dụng React Query để thực hiện việc tạo người dùng
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (user: User) => createUser(user), // Gọi API tạo người dùng với tham số
    onSuccess: async () => {
      // Xử lý thành công, ví dụ hiển thị thông báo
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      message.success('Tạo người dùng thành công');
    },
    onError: error => {
      // Xử lý lỗi
      console.error('Error creating user:', error);
      message.error('Tạo người dùng thất bại');
    },
  });

  return mutation;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: {
      id: string;
      user: { name: string; email: string };
      avatar: File | null;
    }) => updateUser(userData.id, userData.user, userData.avatar),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      message.success('✅ Cập nhật user thành công!');
    },
    onError: error => {
      console.error(' Lỗi khi cập nhật user:', error);
      message.error('Lỗi khi cập nhật user, vui lòng thử lại.');
    },
  });
};

// Hook sử dụng React Query để xóa người dùng
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      message.success(' Xóa user thành công!');
    },
    onError: error => {
      console.error('Lỗi khi xóa user:', error);
      message.error('Lỗi khi xóa user, vui lòng thử lại.');
    },
  });
};
