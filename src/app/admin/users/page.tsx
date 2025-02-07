'use client';
import { Button } from 'antd';
import UserList from './components/UserList';
import { useState } from 'react';
import CreateUserForm from './components/UserForm';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <UserList />
      <CreateUserForm onCancel={handleCancel} isOpen={isModalOpen} />
    </div>
  );
};

export default UserPage;
