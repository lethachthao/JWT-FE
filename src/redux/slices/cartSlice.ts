import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItems {
  id: number;
  product: Product;
  price: number;
  quantity: number; // Số lượng sản phẩm
}

export interface CartState {
  showMiniCart: boolean;
  cartItems: CartItems[];
}

const initialState: CartState = {
  showMiniCart: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      //newItem = {id, product, quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex(item => item.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        //add to cart
        state.cartItems.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check if product is valilable in cart
      const index = state.cartItems.findIndex(item => item.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        item => item.id !== idNeedToRemove
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
