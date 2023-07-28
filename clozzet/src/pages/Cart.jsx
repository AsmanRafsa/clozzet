import Footer from "../components/Footer";
import HeroCart from "../components/HeroCart";
import Nav from "../components/Nav";
import EmptyCart from "../components/EmptyCart";
import { useContext } from "react";
import { StateContext } from "../context/state";
export default function Cart() {
  const{cart,setCart}=useContext(StateContext)
  return (
    <div className="flex flex-col">
      <Nav className="flex-1" />
      {cart.length === 0 ? (
        <EmptyCart className="flex-1" />
      ) : (
        <HeroCart className="flex-1" />
      )}
      <Footer className="flex-1" />
    </div>
  );
}
