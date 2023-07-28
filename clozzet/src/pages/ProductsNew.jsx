import NewProducts from "../components/NewProducts";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function ProductsNew({cart,setCart}) {
  return (
    <div className="flex flex-col">
      <Nav cart={cart} setCart={setCart} className="flex-1" />
      <NewProducts />
      <Footer className="flex-1" />
    </div>
  );
}
