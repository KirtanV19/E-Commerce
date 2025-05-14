import axios from "axios";

const auth = axios.create({
  baseURL: "https://fakestoreapi.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

auth.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

auth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default auth;
