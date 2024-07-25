import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    tax: 8,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
    
      if (findCartItem) {
        findCartItem.quantity += action.payload.quantity; 
      } else {
        state.cartItems.push({ ...action.payload, quantity: action.payload.quantity });
      }
    
      state.total += action.payload.price * action.payload.quantity; 
    },
    
    deleteCart: (state, action) => {
      const deletedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (deletedItem) {
        state.total -= deletedItem.price * deletedItem.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
        state.total += cartItem.price;
      }
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity -= 1;
        state.total -= cartItem.price;
        if (cartItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    reset: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const { addProduct, deleteCart, increase, decrease, reset } = cartSlice.actions;
export default cartSlice.reducer;
