'use client';

import { Button, Form, Image, Input, Modal, Select, Table, Upload, UploadFile } from 'antd';
import { useProducts } from '../hooks/useProducts';
import { useEffect, useState } from 'react';
import { Category, Product } from '@/utils/type';
import { UploadOutlined } from '@ant-design/icons';
import { useCategories } from '../../categories/hooks/categoryApi';
const { Search } = Input;

const ProductList = () => {
  const [searchText, setSearchText] = useState('');
  const { data: products, isPending } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { data: categories } = useCategories();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      form.setFieldsValue({
        ...selectedProduct,
        category_id: selectedProduct.category_id, // Gán giá trị category hiện tại
      });
    }
  }, [selectedProduct, form]);


  // Lọc sản phẩm theo tên
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleLogoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setImageFile(fileList[0] || null); // Lưu avatar file vào state
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Mở modal cập nhật và lưu user được chọn
  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => (
        <Image
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="image"
          style={{ width: 40, height: 40 }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: Product) => (
        <div className='flex gap-2 '>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          {/* <Button
            onClick={() => handleDelete(record.id)}
            loading={isDeleting}
            disabled={isDeleting}
            danger
          >
            Delete
          </Button> */}
        </div>
      ),
    },
  ];
  return (
    <div className='mt-3'>
      <div className='flex justify-end'>
        <Search
          placeholder="Nhập tên sản phẩm"
          allowClear
          size="large"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginBottom: 13, width: 250 }}
          className='flex justify-end'
        />
      </div>
      <Table scroll={{ y: 570 }} dataSource={filteredProducts} columns={columns} loading={isPending} pagination={{ pageSize: 150 }} />

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
          onFinish={console.log}
        >
          {/* Trường tên */}
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả"
            rules={[
              { required: true, message: 'Vui lòng nhập mô tả sản phẩm!' },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="category_id"
            label="Danh mục"
            rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
          >
            <Select
              defaultValue={selectedProduct?.category_id}
            >
              {categories?.map((category: Category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>


          {/* Trường upload avatar */}
          <Form.Item label="Image">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              showUploadList={true} // Ẩn danh sách các file đã tải lên
              onChange={handleLogoChange}
            >
              <Button icon={<UploadOutlined />}>Upload Logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductList;
