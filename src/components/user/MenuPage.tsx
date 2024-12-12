'use client';

import { DataProduct } from '@/app/mockData/dataProduct';
import { Image } from 'antd';
import { useState } from 'react';

const MenuPage = () => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  return (
    <div className="flex font-bold gap-5 px-24 bg-[#e7e7e7] items-center relative">
      <p className="hover:bg-gray-400 px-3 py-1 cursor-pointer">Trang chủ</p>
      <div className=" flex">
        {DataProduct.map(item => (
          <div
            key={item.brand}
            onMouseEnter={() => setHoveredBrand(item.brand)} // Đặt trạng thái khi hover vào brand
            onMouseLeave={() => setHoveredBrand(null)} // Xóa trạng thái khi rời chuột khỏi brand
          >
            <p className="hover:bg-gray-500 px-3 py-1 cursor-pointer relative">
              {item.brand}
            </p>
            {hoveredBrand === item.brand && (
              <div className="px-5 absolute left-0 bg-gray-500 text-black shadow-md rounded-md z-10 w-screen ">
                <ul className="py-2 flex space-x-4 justify-between">
                  {item.products.map((product, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 flex justify-between"
                    >
                      <div className="items-center flex flex-col justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={120}
                          height={81}
                          className="mr-4 rounded"
                        />
                        <div>
                          <p className="text-white">{product.name}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
