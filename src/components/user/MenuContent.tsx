'use client';

import { ICArrow } from '@/app/icon/ICArrow';
// import { DataProduct } from '@/app/mockData/dataProduct';
import { Image } from 'antd';
import { useState } from 'react';

const Menucontent = () => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  return (
    <div
      className="group w-48 relative"
      onMouseEnter={() => setHoveredBrand('Sony')}
      onMouseLeave={() => setHoveredBrand(null)}
    >
      <p className="bg-red-600 rounded-t-lg text-white p-[6px] font-bold">
        Danh Mục
      </p>
      <div className="hover:bg-blue-400 px-2 py-[6px] cursor-pointer bg-[#f1f1f1] text-sm flex absolute">
        <Image
          src={'/images/product1.jpg'}
          alt={`Logo`}
          width={30}
          height={30}
          className="inline-block mr-2 rounded-md"
        />
        <div className="flex items-center ml-1">
          <p>Máy game Nintendo</p>
          <p className="ml-1 mt-1">
            <ICArrow width={10} height={10} fill="#44444f" />
          </p>
        </div>
      </div>

      {hoveredBrand === 'Sony' && (
        <div className="absolute left-48 text-black z-10 w-40 h-[41px]">
          <ul className="justify-between flex flex-col gap-[1px]">
            <li className="py-[5px] px-2 hover:bg-red-200 bg-[#f1f1f1] flex justify-between mb-[1px]">
              <div className="items-center flex justify-between w-full h-8">
                <p>Tivi</p>
                <p className="mt-1">
                  <ICArrow width={10} height={10} fill="#44444f" />
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menucontent;
