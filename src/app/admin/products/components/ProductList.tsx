'use client';

import { Image, Table } from 'antd';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const { data: products, isPending } = useProducts();

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
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => (
        <Image
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={products} columns={columns} loading={isPending} />
    </div>
  );
};

export default ProductList;
