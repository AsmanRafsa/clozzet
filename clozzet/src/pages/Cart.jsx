import Footer from "../components/Footer";
import HeroCart from "../components/HeroCart";
import Nav from "../components/Nav";
import EmptyCart from "../components/EmptyCart";
export default function Cart({ cart, setCart }) {
  return (
    <div>
      <Nav cart={cart} setCart={setCart} />
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <HeroCart cart={cart} setCart={setCart} />
      )}
      <Footer />
    </div>
  );
}
