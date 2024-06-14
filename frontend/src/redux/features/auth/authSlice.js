import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth", // prefix cho action type của bạn
  initialState, // Giá trị khởi tạo cho reducer , cũng có thể là funciton khởi tạo
  reducers: {
    // Các key name được dùng để generate các action

    // cài đặt các thông tin xác thực (credentials)
    setCredentials: (state, action) => {
      state.userInfo = action.payload; // thông tin của action
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTime);
    },

    // xóa thông tin xác thực
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
