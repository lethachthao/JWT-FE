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
  useBanners,
  useDeleteBanner,
  useUpdateBanner,
} from '../hooks/bannerApi';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Banner } from '@/utils/type';

const BannerList = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  const { data: banners, isPending } = useBanners();
  const [bannerFile, setBannerFile] = useState<UploadFile | null>(null);
  const { mutate } = useUpdateBanner();
  const { mutate: deleteBanner, isPending: isDeleting } = useDeleteBanner();

  useEffect(() => {
    console.log('Selected Banner:', selectedBanner); // Kiểm tra dữ liệu
    if (selectedBanner) {
      form.resetFields(); // Reset form trước khi đặt giá trị mới
      form.setFieldsValue({
        title: selectedBanner.title,
      });
    }
  }, [selectedBanner, form]);

  // Xử lý khi chọn file upload
  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setBannerFile(fileList[0] || null);
  };

  // Mở modal cập nhật và lưu user được chọn
  const handleEdit = (user: Banner) => {
    setSelectedBanner(user);
    setIsModalOpen(true);
  };

  const handleUpdate = (values: { title: string }) => {
    if (!selectedBanner) return;

    const formData = new FormData();
    formData.append('title', values.title);
    if (bannerFile?.originFileObj) {
      formData.append('image', bannerFile.originFileObj);
    }

    // Chuyển id thành string nếu cần
    const bannerId = String(selectedBanner.id);

    mutate({
      id: bannerId,
      title: values.title,
      image: bannerFile?.originFileObj || null,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Xử lý xóa category
  const handleDelete = async (id: string) => {
    await deleteBanner(id); // Thực hiện xóa category
  };

  if (isPending) return <p>Loading banners...</p>;

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => (
        <Image
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="image"
          style={{ width: 250, height: 100 }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: Banner) => (
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
  return (
    <div>
      <Table dataSource={banners} columns={columns} />

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
            name="title"
            label="Title"
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
              onChange={handleFileChange}
            >
              <Button icon={<UploadOutlined />}>Upload Avatar</Button>
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

export default BannerList;
