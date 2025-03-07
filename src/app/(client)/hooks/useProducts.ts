import { useQuery } from '@tanstack/react-query';
import { getListProduct } from '../_service/productListApi';

export const useListProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getListProduct,
  });
};

// export const useProductById = (id: number) => {
//   return useQuery({
//     queryKey: ['product', id], // Mỗi sản phẩm có một queryKey riêng
//     queryFn: () => getProductById(id), // Gọi API lấy chi tiết sản phẩm
//     enabled: !!id, // Chỉ chạy nếu có ID hợp lệ
//   });
// };
