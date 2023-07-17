import Router from "./components/Router";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
  <Router cart={cart} setCart={setCart}/>
  );
}
