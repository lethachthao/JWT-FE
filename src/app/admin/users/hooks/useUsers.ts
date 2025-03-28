import apiClient from '@/utils/apiClient';
import { User } from '@/utils/type';
import { AxiosResponse } from 'axios';

// Hàm gọi API để lấy danh sách người dùng
export const getUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await apiClient.get('/users');
  return response.data;
};

// Hàm gọi API để tạo người dùng
export const createUser = async (user: User): Promise<User> => {
  const formData = new FormData();

  // Dùng Object.entries để tự động thêm các thuộc tính vào FormData
  Object.entries(user).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response: AxiosResponse<User> = await apiClient.post(
    '/users',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );

  return response.data;
};

export const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const formData = new FormData();

  // Thêm tất cả thông tin người dùng vào formData
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value instanceof File ? value : String(value));
    }
  });

  // Gửi request cập nhật user
  const response = await apiClient.post(
    `/users/${id}?_method=PUT`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );

  return response.data;
};


// Hàm gọi API để xóa người dùng
export const deleteUser = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/users/${id}`);
  } catch (error) {
    console.error('Lỗi xóa user:', error);
    throw error;
  }
};
