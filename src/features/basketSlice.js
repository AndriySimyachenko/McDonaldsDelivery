import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the basket`
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Create a base selector to select the items array
const selectBasketItemsBase = (state) => state.basket.items;

// Create a selector that returns the basket items
export const selectBasketItems = createSelector(
  [selectBasketItemsBase],
  (items) => items
);

// Create a selector that filters basket items based on an id
export const selectBasketItemsWithId = createSelector(
  [selectBasketItemsBase, (_, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

// Create a selector that calculates the total price of items in the basket
export const selectBasketTotal = createSelector(
  [selectBasketItemsBase],
  (items) => items.reduce((total, item) => (total += item.price), 0)
);

export default basketSlice.reducer;
