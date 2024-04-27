import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cart/CartSlice.jsx";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});