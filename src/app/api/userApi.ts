import { fetchData, postData, putData } from './api';

export interface User {
  id: number;
  name: string;
  email: string;
  age: string;
  role: string;
}

export interface ApiResponse {
  items: User[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

export const getUsers = async (page: number): Promise<ApiResponse> => {
  return await fetchData(`/users?page=${page}`);
};

export const createUser = async (data: never) => {
  return await postData('/users', data);
};

export const updateUser = async (id: number, data: never) => {
  return await putData(`/users/${id}`, data); // Sử dụng endpoint PUT
};
