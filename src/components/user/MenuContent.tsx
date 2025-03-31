'use client';

import { ICArrow } from '@/icon/ICArrow';
import { dataProduct } from '@/mockData/dataProduct';
// import { dataProduct } from '@/app/mockData/dataProduct';
import { Image } from 'antd';
import { useState } from 'react';

const Menucontent = () => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  return (
    <div>
      <p className="bg-green-50 rounded-t-lg text-white p-[6px] font-bold w-52">
        Danh Mục
      </p>
      {dataProduct.map(item => (
        <div
          key={item.brand}
          className="group w-52 relative"
          onMouseEnter={() => setHoveredBrand(item.brand)}
          onMouseLeave={() => setHoveredBrand(null)}
        >
          {/* Hiển thị từng sản phẩm */}
          <div className="hover:bg-blue-400 px-[9.6px] py-[6px] cursor-pointer bg-gray-300 text-sm flex items-center">
            <Image
              src={item.logo}
              alt={`Logo của ${item.brand}`}
              width={30}
              height={30}
              className="inline-block mr-2 rounded-md"
            />
            <div className="flex items-center ml-1">
              <p>{item.brand}</p>
              <p className="ml-1 mt-1">
                <ICArrow width={10} height={10} fill="#44444f" />
              </p>
            </div>
          </div>

          {/* Hover hiện danh sách sản phẩm */}
          {hoveredBrand === item.brand && (
            <div className="absolute left-48 text-black z-10 w-40 bg-white border rounded shadow-lg">
              <ul className="flex flex-col gap-1">
                {item.products.map((product, index) => (
                  <li
                    key={`${item.brand}-hover-${index}`}
                    className="py-2 px-2 hover:bg-red-200 bg-gray-300 flex justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <p>{product.name}</p>
                      <p>
                        <ICArrow width={10} height={10} fill="#44444f" />
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menucontent;
