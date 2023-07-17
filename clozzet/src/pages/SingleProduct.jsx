import Nav from "../components/Nav";
import SPHero from "../components/SPHero";
import Footer from "../components/Footer";
export default function SingleProduct({cart,setCart}) {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>;
      <SPHero />
      <Footer />
    </div>
  );
}