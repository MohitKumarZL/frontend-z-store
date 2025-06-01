import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('/api/products'); // Replace with real API
  return res.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      });
  },
});

export default productSlice.reducer;
