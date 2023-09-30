import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./src/features/basketSlice";
import restaurantReducer from "./src/features/RestaurantSlice";
import orderReducer from "./src/features/RestaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
    order: orderReducer,
  },
});
