import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productReducer,
  },
});
