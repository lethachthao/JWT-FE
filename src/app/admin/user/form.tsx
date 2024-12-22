import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  FormProps,
  Input,
  Modal,
  Radio,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import { useState } from 'react';

interface Iprop {
  open: boolean;
}

type FieldType = {
  username?: string;
  password?: string;
  email?: string;
  avatar?: string;
  age?: string;
  address?: string;
  role?: string;
  phoneNumber?: string;
  accountType?: string;
};

const FormUser: React.FC<Iprop> = ({ open }) => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleGetAllFields = () => {
    const allFields = form.getFieldsValue();
    console.log('All form fields:', allFields);
  };
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Modal title="Basic Modal" open={open} footer={null}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className=" flex flex-col gap-4"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="age"
            name="age"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="PhoneNumber"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="role" label="role">
            <Radio.Group className="flex justify-center gap-20">
              <Radio value="USER">USER</Radio>
              <Radio value="ADMIN">ADMIN</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="accountType" label="AccountType">
            <Radio.Group className="flex justify-center gap-20">
              <Radio value="USER">USER</Radio>
              <Radio value="ADMIN">ADMIN</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item<FieldType>
            label="Avatar"
            name="avatar"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              maxCount={1}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item label={null}>
            <Button
              className="flex justify-center items-center"
              type="primary"
              htmlType="submit"
              onClick={handleGetAllFields}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormUser;
