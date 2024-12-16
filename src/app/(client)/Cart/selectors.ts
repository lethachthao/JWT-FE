import { CartState } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';
const cartItemsselector = (state: RootState) => state.cart.cartItems;

//Count number of product in cart
export const cartitemsCountSelector = createSelector(
  cartItemsselector,
  cartItems => cartItems.reduce((count, item) => count + item.quantity, 0)
);

//Calculate total price of products in cart
export const cartTotalPriceSelector = createSelector(
  cartItemsselector,
  cartItems =>
    cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
);

// Selector để lấy danh sách các sản phẩm trong giỏ hàng
export const cartItemsSelector = (state: { cart: CartState }) =>
  state.cart.cartItems;
