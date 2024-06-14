import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import favoritesReducer from "../redux/features/favorites/favoriteSlice";
import cartSliceReducer from "./features/cart/cartSlice.js";
import shopReducer from "./features/shop/shopSlice.js";
import { getFavoritesFromLocalStorage } from "../Utils/localStorage";

const initialFavorites = getFavoritesFromLocalStorage() || [];

// Tạo Redux store với configureStore() từ Redux Toolkit, truyền vào một object với các key:
// - reducer: chứa các reducer được tạo ra từ API Slice
// - middleware: chứa middleware được tạo ra từ API Slice, lấy các middleware mặc định, và gộp thêm apiSlice.middleware từ Redux Toolkit Query
// - devTools: bật Redux DevTools
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // thêm reducer đưuọc rạo ra từ apiSlice
    auth: authReducer,
    favorites: favoritesReducer,
    cart: cartSliceReducer,
    shop: shopReducer,
  },
  preloadedState: {
    favorites: initialFavorites,
  },
  // Thêm api middleware vào store để enable các tính năng như caching, invalidation, polling của RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Lắng nghe các action được gửi tới store
setupListeners(store.dispatch);
export default store;
