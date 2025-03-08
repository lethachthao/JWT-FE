'use client';
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Table,
  Upload,
  UploadFile,
} from 'antd';
import {
  useCategories,
  useDeleteCategory,
  useUpdateCategory,
} from '../hooks/categoryApi';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Category } from '@/utils/type';

const CategoryList = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const { data: categories, isPending } = useCategories();
  const { mutate } = useUpdateCategory();
  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory();

  // Tách logo và banner thành 2 state riêng biệt
  const [logoFile, setLogoFile] = useState<UploadFile | null>(null);
  const [bannerFile, setBannerFile] = useState<UploadFile | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      form.resetFields(); // Reset form trước khi đặt giá trị mới
      form.setFieldsValue({
        name: selectedCategory.name,
      });
    }
  }, [selectedCategory, form]);

  // Xử lý khi chọn file logo
  const handleLogoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setLogoFile(fileList[0] || null);
  };

  // Xử lý khi chọn file banner
  const handleBannerChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setBannerFile(fileList[0] || null);
  };

  // Mở modal cập nhật và lưu user được chọn
  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleUpdate = (values: { name: string }) => {
    if (!selectedCategory) return;

    const formData = new FormData();
    formData.append('name', values.name);
    if (logoFile?.originFileObj) {
      formData.append('logo', logoFile.originFileObj);
    }

    if (bannerFile?.originFileObj) {
      formData.append('banner', bannerFile.originFileObj);
    }

    // Chuyển id thành string nếu cần
    const bannerId = String(selectedCategory.id);

    mutate({
      id: bannerId,
      name: values.name,
      logo: logoFile?.originFileObj || null,
      banner: bannerFile?.originFileObj || null,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id); // Thực hiện xóa category
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (image: string) => (
        <Image
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
      ),
    },
    {
      title: 'Banner',
      dataIndex: 'banner',
      key: 'banner',
      render: (image: string) => (
        <Image
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: Category) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
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

  if (isPending) return <p>Loading banners...</p>;

  return (
    <>
      <Table dataSource={categories} columns={columns} scroll={{ y: 600 }}/>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleUpdate}
        >
          {/* Trường tên */}
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your Title!' }]}
          >
            <Input />
          </Form.Item>

          {/* Trường upload avatar */}
          <Form.Item label="Banner">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              showUploadList={true} // Ẩn danh sách các file đã tải lên
              onChange={handleBannerChange}
            >
              <Button icon={<UploadOutlined />}>Upload Banner</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Logo">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              showUploadList={true} // Ẩn danh sách các file đã tải lên
              onChange={handleLogoChange}
            >
              <Button icon={<UploadOutlined />}>Upload Banner</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryList;
