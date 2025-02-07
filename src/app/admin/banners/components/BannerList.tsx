'use client';
import { Table } from 'antd';
import { useBanners } from '../hooks/bannerApi';

const BannerList = () => {
  const { data: banners, isPending } = useBanners();
  if (isPending) return <p>Loading banners...</p>;

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
  ];
  return (
    <div>
      <Table dataSource={banners} columns={columns} />
    </div>
  );
};

export default BannerList;
