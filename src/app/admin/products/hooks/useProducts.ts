import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createProduct,
  getProduct,
  updateProduct,
} from '../_services/productApi';
import { Product } from '@/utils/type';
import { message } from 'antd';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProduct,
  });
};

//Hook tạo product
export const useCreateProduct = () => {
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: Product) => createProduct(data),
    onSuccess: async () => {
      await QueryClient.invalidateQueries({ queryKey: ['products'] });
      message.success('Tạo product thành công');
    },
    onError: error => {
      console.log('Error creating product:', error);
      message.error('Tạo product thất bại');
    },
  });
  return mutation;
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Product) => updateProduct(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['products'] });
      message.success('✅ Cập nhật Product thành công!');
    },
    onError: error => {
      console.error(' Lỗi khi cập nhật Product:', error);
      message.error('Lỗi khi cập nhật Product, vui lòng thử lại.');
    },
  });
};
