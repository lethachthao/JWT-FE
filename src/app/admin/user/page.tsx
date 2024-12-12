'use client';
import { ApiResponse, getUsers } from '@/app/api/userApi';
import { useQuery } from '@tanstack/react-query';
import { Modal, Pagination, Table, TableColumnsType } from 'antd';
import { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: string;
  role: string;
}

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Duy trì trang hiện tại

  const { data, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ['users', currentPage],
    queryFn: () => getUsers(currentPage), // Gọi API với page hiện tại
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Cập nhật trang khi thay đổi
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Role', dataIndex: 'role', key: 'role' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a onClick={showModal}>Update</a>,
    },
  ];

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error fetching users</div>;

  const users: DataType[] =
    data?.items.map(user => ({
      key: user.id, // Đảm bảo rằng key là id của user
      name: user.name,
      email: user.email,
      age: user.age,
      role: user.role,
    })) || [];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[calc(100%_-_4rem)]">
      <Table<DataType>
        columns={columns}
        dataSource={users}
        pagination={false}
      />
      <Pagination
        className="mt-3"
        current={currentPage}
        total={data?.meta.totalItems || 0}
        pageSize={data?.meta.itemsPerPage || 20}
        onChange={handlePageChange} // Cập nhật trang khi người dùng thay đổi
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default UserPage;
