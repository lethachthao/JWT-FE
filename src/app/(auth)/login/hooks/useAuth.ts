import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { getUserProfile, loginUser } from '../_services/authApi';
import Cookies from 'js-cookie';

// Hook lấy thông tin user
export const useUserProfile = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserProfile,
    enabled: !!Cookies.get('token'), // Chỉ gọi API nếu có token
  });
};

// Hook đăng nhập
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginUser(email, password),
    onSuccess: async data => {
      Cookies.set('token', data.token, { expires: 1, path: '/' });
      Cookies.set('role', data.role, { expires: 1, path: '/' });
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      message.success('Đăng nhập thành công');
    },
    onError: () => {
      message.error('Sai email hoặc mật khẩu');
    },
  });
};

// Hook đăng xuất
export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    Cookies.remove('token'); // Xóa token trong cookie
    queryClient.removeQueries({ queryKey: ['user'] }); // Xóa dữ liệu user trong cache
    message.success('Đăng xuất thành công');
    window.location.href = '/login'; // Chuyển hướng về trang đăng nhập
  };
};
