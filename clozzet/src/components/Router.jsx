import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
export default function Router({ cart, setCart }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>} />
        <Route path="/login" element={<LogIn cart={cart} setCart={setCart}/>} />
        <Route path="/register" element={<SignUp cart={cart} setCart={setCart}/>} />
        <Route path="/aboutus" element={<AboutUs cart={cart} setCart={setCart}/>} />
        <Route path="/product/:productId" element={<SingleProduct cart={cart} setCart={setCart}/>} />
        <Route path="*" element={<NotFound cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}
