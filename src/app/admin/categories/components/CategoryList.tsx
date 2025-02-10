import { Image, Table } from 'antd';
import { useCategories } from '../hooks/CategoryApi';

const CategoryList = () => {
  const { data: categories, isPending } = useCategories();
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
  ];

  if (isPending) return <p>Loading banners...</p>;

  return (
    <>
      <Table dataSource={categories} columns={columns} />
    </>
  );
};

export default CategoryList;
