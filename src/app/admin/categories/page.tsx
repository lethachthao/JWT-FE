'use client';

import { Button } from 'antd';
import CategoryList from './components/CategoryList';
import FormCategory from './components/CategoryForm';
import { useState } from 'react';

const CategoriesPage = () => {
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
        Add Categories
      </Button>
      <FormCategory isOpen={isModalOpen} onCancel={handleCancel} />
      <CategoryList />
    </div>
  );
};

export default CategoriesPage;
