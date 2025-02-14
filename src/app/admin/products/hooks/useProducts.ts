import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createProduct, getProduct } from '../_services/productApi';
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
