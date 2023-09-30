import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    selectedOptions: {},
    cart: [],
  },
  reducers: {
    addSelectedOption: (state, action) => {
      const { listId, option } = action.payload;
      if (!state.selectedOptions[listId]) {
        state.selectedOptions[listId] = [];
      }
      state.selectedOptions[listId].push(option._id);
    },
    removeSelectedOption: (state, action) => {
      const { listId, option } = action.payload;
      state.selectedOptions[listId] = state.selectedOptions[listId].filter(
        (itemId) => itemId !== option._id
      );
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
  },
});

export const {
  addSelectedOption,
  removeSelectedOption,
  addToCart,
  removeFromCart,
} = orderSlice.actions;

export default orderSlice.reducer;
