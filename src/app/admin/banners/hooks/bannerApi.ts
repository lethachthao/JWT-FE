import { useQuery } from '@tanstack/react-query';
import { getBanners } from './useBanners';

// Hook lấy danh sách banners
export const useBanners = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
  });
};
