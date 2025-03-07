import apiClient from '@/utils/apiClient';
import { User } from '@/utils/type';
import { AxiosResponse } from 'axios';

interface LoginResponse {
  token: string;
  role: string; // Thêm role vào đây
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await apiClient.post(
    '/login',
    { email, password }
  );
  return response.data;
};

export const getUserProfile = async (): Promise<User> => {
  const response: AxiosResponse<{ success: boolean; user: User }> =
    await apiClient.get('/profile');
  return response.data.user;
};
