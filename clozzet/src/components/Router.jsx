import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}/>
        <Route path="/Cart" element={Cart}/>
        <Route path="/Shop" element={Shop}/>
        
      </Routes>
    </BrowserRouter>
  );
}
