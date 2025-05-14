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

const App = () => (
  <Router>
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<ContactUs />} />

      {/* Protected routes go inside this */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopGrid />} />
        <Route path="/order" element={<CompletedOrder />} />
        <Route path="/shipping" element={<ShippingDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
