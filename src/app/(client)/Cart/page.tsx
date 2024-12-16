'use client';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartitemsCountSelector,
  cartItemsSelector,
  cartTotalPriceSelector,
} from './selectors';
import Image from 'next/image';
import React from 'react';
import { Button, Table } from 'antd';
import {
  CartItems,
  removeFromCart,
  setQuantity,
} from '@/redux/slices/cartSlice';
import { AppDispatch } from '@/redux/store';

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector(cartItemsSelector); // Sử dụng selector đã tạo
  const cartItemsCount = useSelector(cartitemsCountSelector); // Tính tổng số lượng sản phẩm trong giỏ hàng
  const cartTotal = useSelector(cartTotalPriceSelector); // Tính tổng giá trị của sản phẩm trong giỏ hàng

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Ngăn việc giảm xuống dưới 1
    dispatch(setQuantity({ id, quantity: newQuantity }));
  };

  const hanleRemoveFormCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // Nhóm các sản phẩm theo id
  const groupedItems = cartItems.reduce(
    (product: Record<number, CartItems>, item) => {
      if (product[item.id]) {
        product[item.id].quantity += item.quantity;
      } else {
        product[item.id] = { ...item };
      }
      return product;
    },
    {}
  );

  const groupedCartItems = Object.values(groupedItems);

  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'id',
    },
    {
      title: 'Image',
      render: (record: CartItems) => (
        <Image
          src={record.product.image}
          alt={record.product.image}
          width={100}
          height={100}
        />
      ), // Thay đổi any -> CartItems
    },
    {
      title: 'Product Name',
      render: (record: CartItems) => record.product.name,
    },
    {
      title: 'Price',
      render: (record: CartItems) => `${record.product.price} VND`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: (text: number, record: CartItems) => (
        <div className="flex items-center">
          <Button
            size="small"
            onClick={() => handleUpdateQuantity(record.id, record.quantity - 1)}
            disabled={record.quantity <= 1} // Ngăn giảm dưới 1
          >
            -
          </Button>
          <span className="mx-2">{record.quantity}</span>
          <Button
            size="small"
            onClick={() => handleUpdateQuantity(record.id, record.quantity + 1)}
          >
            +
          </Button>
        </div>
      ),
    },
    {
      title: 'Total',
      render: (record: CartItems) =>
        `${record.product.price * record.quantity} VND`, // Thay đổi any -> CartItems
    },
    {
      title: 'Action',
      render: (record: CartItems) => (
        <div>
          <Button
            onClick={() => hanleRemoveFormCart(record.id)}
            className="bg-red-500 text-white"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <Table<CartItems>
        columns={columns}
        dataSource={groupedCartItems}
        size="middle"
        rowKey="id"
        pagination={false}
      />
      <div className="flex flex-col justify-end">
        <p className="border-b h-10 flex items-center ">
          Total Items:
          <span className="ml-2 font-bold">{cartItemsCount}</span>
        </p>
        <p className="border-b items-center flex h-10">
          Total Price:
          <span className="font-bold text-red-50 ml-2"> {cartTotal} VND</span>
        </p>
      </div>
      <div className="flex justify-end">
        <Button className="bg-blue-50 mt-2 p-4 text-white">Thanh toán</Button>
      </div>
    </div>
  );
};

export default CartPage;
