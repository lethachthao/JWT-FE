import { fetchData, postData } from './api';

export const getUsers = async () => {
  return await fetchData('/users');
};

export const createUser = async (data: never) => {
  return await postData('/users', data);
};
