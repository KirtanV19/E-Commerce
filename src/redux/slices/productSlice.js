import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../API/product";
import _ from "lodash";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await products.get("/products");
    return response.data;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,

  //  Cart
  cart: [],

  // Wishlist
  wishlist: [],

  categories: [],
  brands: [],
  colors: [],
  prices: [],
  pricesOne: [],
  pricesTwo: [],
  pricesThree: [],

  newArrival: [],
  bestSeller: [],
  featured: [],
  specialOffer: [],

  featuredProducts: {
    data: [],
    loading: false,
    error: null,
  },
  trendingProducts: {
    data: [],
    loading: false,
    error: null,
  },
  trendingProductsOne: {
    data: [],
    loading: false,
    error: null,
  },
  trendingProductsTwo: {
    data: [],
    loading: false,
    error: null,
  },
  topCategories: {
    data: [],
    loading: false,
    error: null,
  },
  discountItem: {
    data: [],
    loading: false,
    error: null,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);

      if (existing) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    addToWishlist: (state, action) => {
      const existing = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!existing) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increment: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrement: (state, action) => {
      state.cart = state.cart
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.featuredProducts.loading = true;

        state.trendingProducts.loading = true;

        state.trendingProductsOne.loading = true;

        state.trendingProductsTwo.loading = true;

        state.topCategories.loading = true;

        state.discountItem.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;

        state.featuredProducts.loading = false;
        state.featuredProducts.data = _.sampleSize(action.payload.products, 16);

        state.trendingProducts.loading = false;
        state.trendingProducts.data = _.sampleSize(
          action.payload.products.filter((product) => product.popular),
          4
        );

        state.trendingProductsOne.loading = false;
        state.trendingProductsOne.data = _.sampleSize(
          action.payload.products.filter((product) => product.discount === 11),
          2
        );

        state.trendingProductsTwo.loading = false;
        state.trendingProductsTwo.data = _.sampleSize(
          action.payload.products.filter(
            (product) => product.category === "audio"
          ),
          3
        );

        state.topCategories.loading = false;
        state.topCategories.data = _.sampleSize(
          action.payload.products.filter(
            (product) => product.category === "audio"
          ),
          16
        );

        state.discountItem.loading = false;
        state.discountItem.data = _.sampleSize(
          action.payload.products.filter(
            (product) => product.category === "gaming"
          ),
          3
        );

        state.newArrival = _.sampleSize(
          action.payload.products.filter((product) => product.onSale === true),
          6
        );

        state.bestSeller = _.sampleSize(
          action.payload.products.filter(
            (product) => product.category === "audio"
          ),
          6
        );
        state.specialOffer = _.sampleSize(
          action.payload.products.filter((product) => product.discount === 3),
          6
        );
        state.featured = _.sampleSize(
          action.payload.products.filter(
            (product) => product.category === "gaming"
          ),
          6
        );

        state.categories = _.uniq(
          action.payload.products.map((p) => p.category)
        );

        state.brands = _.uniq(action.payload.products.map((p) => p.brand));

        state.colors = _.reject(
          _.uniq(action.payload.products.map((p) => p.color)),
          _.isNull
        );

        state.prices = action.payload.products.filter(
          (p) => p.price > 0 && p.price <= 100
        );

        state.pricesOne = action.payload.products.filter(
          (p) => p.price > 100 && p.price <= 200
        );
        state.pricesTwo = action.payload.products.filter(
          (p) => p.price > 200 && p.price <= 300
        );
        state.pricesThree = action.payload.products.filter(
          (p) => p.price > 300
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

        state.featuredProducts.loading = false;
        state.featuredProducts.error = action.error.message;

        state.trendingProducts.loading = false;
        state.trendingProducts.error = action.error.message;

        state.trendingProductsOne.loading = false;
        state.trendingProductsOne.error = action.error.message;

        state.trendingProductsTwo.loading = false;
        state.trendingProductsTwo.error = action.error.message;

        state.topCategories.loading = false;
        state.topCategories.error = action.error.message;

        state.discountItem.loading = false;
        state.discountItem.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  clearCart,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = productSlice.actions;
