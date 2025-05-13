import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./screens/Home";
import Error from "./screens/Error";
import Faq from "./screens/Faq";
import ContactUs from "./screens/ContactUs";
import ShopGrid from "./screens/ShopGrid";
import CompletedOrder from "./screens/CompletedOrder";
import ProductDetails from "./screens/ProductDetails";
import ShippingDetails from "./screens/ShippingDetails";
import ShoppingCart from "./screens/ShoppingCart";
import Login from "./screens/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./screens/Wishlist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <ShopGrid />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <CompletedOrder />
            </ProtectedRoute>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/shipping"
          element={
            <ProtectedRoute>
              <ShippingDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <ShoppingCart />
            </ProtectedRoute>
          }
        />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
