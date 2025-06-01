import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = wishList.actions;
export default wishList.reducer;
