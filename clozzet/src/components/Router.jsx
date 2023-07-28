import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import ProductsNew from "../pages/ProductsNew";
export default function Router({ cart, setCart }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/products" element={<ProductsNew/>} />

        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/product/:productId" element={<SingleProduct/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
