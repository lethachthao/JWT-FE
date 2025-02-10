import { useQuery } from '@tanstack/react-query';
import { getCategories } from './useCategories';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};
