import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

// define a service using a base URL and expected endpoints
// RTK Query sử dụng thuật ngữ "API Slice" để mô tả một tập hợp các endpoints và logic để lấy dữ liệu từ một API.

// RTK Query cung cấp hàm createApi() để tạo ra một API Slice.

// reducerPath: tên field trong redux state, là unique key mà service sẽ được mounted trong store (phân biệt với các reducers khác trong store)

// baseQuery được dùng cho mỗi endpoints để fetch api

// endpoints là tập hợp những method giúp get, post, put, delete... tương tác với server
// Khi khai báo endpoints nó sẽ sinh ra cho chúng ra các hook tương ứng để sử dụng trong component React
// endpoints có 2 kiểu là query và mutation
// Query: thường dùng cho GET
// Mutation: thường dùng cho các trường hợp thay đổi dữ liệu trên server như POST, PUT, DELETE

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product", "Order", "User", "Category"],
  endpoints: () => ({}),
});
