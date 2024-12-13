import axiosInstance from './axiosInstance';

// Hàm GET
export const fetchData = async (endpoint: string) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};

// Hàm POST
export const postData = async (endpoint: string, data: never) => {
  const response = await axiosInstance.post(endpoint, data);
  return response.data;
};

// Hàm PUT
export const putData = async (endpoint: string, data: never) => {
  const response = await axiosInstance.put(endpoint, data);
  return response.data;
};

// Hàm DELETE
export const deleteData = async (endpoint: string) => {
  const response = await axiosInstance.delete(endpoint);
  return response.data;
};
