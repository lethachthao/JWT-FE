import apiClient from '@/utils/apiClient';
import { Product } from '@/utils/type';
import { AxiosResponse } from 'axios';

// Hàm gọi API để lấy danh sách banner
export const getListProduct = async (): Promise<Product[]> => {
  const response: AxiosResponse<Product[]> =
    await apiClient.get('/user/products');
  return response.data;
};

// // Hàm gọi API để lấy chi tiết sản phẩm theo ID
// export const getProductById = async (id: number): Promise<Product | null> => {
//   const response: AxiosResponse<Product> = await apiClient.get(
//     `/user/products/${id}`
//   );
//   return response.data;
// };
