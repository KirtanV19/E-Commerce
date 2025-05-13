import axios from "axios";

const products = axios.create({
  baseURL: "https://fakestoreapi.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

products.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

products.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default products;
