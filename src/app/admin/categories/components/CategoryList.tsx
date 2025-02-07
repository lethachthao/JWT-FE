'use client';

import {
  useCategories,
  useDeleteCategory,
  useEditCategory,
} from '@/utils/categoryApi';
import { Category } from '@/utils/type';
import { Button, message, Spin, Table } from 'antd';
import { useState } from 'react';
import CategoryModal from './CategoryModal';

const CategoryList = () => {
  const { data: categories, isLoading, error } = useCategories();
  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory(); // Dùng hook delete
  const { mutate: editCategory } = useEditCategory();

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const handleUpdate = (category: Category) => {
    setCurrentCategory(category);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (values: Category) => {
    if (currentCategory) {
      editCategory({ id: currentCategory.id, data: values }); // Gọi hàm editCategory từ hook
      setIsUpdateModalOpen(false);
      setCurrentCategory(null);
      message.success('Category Update successfully');
    }
  };

  // Xử lý xóa category
  const handleDelete = async (id: string) => {
    await deleteCategory(id); // Thực hiện xóa category
    message.success('Category deleted successfully'); // Thông báo thành công
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: Category) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button onClick={() => handleUpdate(record)} type="primary">
            Update
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            loading={isDeleting}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Xử lý loading và lỗi
  if (isLoading) {
    return <Spin tip="Loading categories..." />;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <div>
      <Table
        dataSource={categories?.data?.map(category => ({
          ...category,
          id: category.id.toString(), // Chuyển đổi id thành string
        }))}
        columns={columns}
        rowKey="id"
      />

      {/* Modal Update */}
      {isUpdateModalOpen && currentCategory && (
        <CategoryModal
          isOpen={isUpdateModalOpen}
          onCancel={() => {
            setIsUpdateModalOpen(false);
            setCurrentCategory(null);
          }}
          initialValues={currentCategory || { name: '', description: '' }} // Đảm bảo giá trị mặc định
          onFinish={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

export default CategoryList;
