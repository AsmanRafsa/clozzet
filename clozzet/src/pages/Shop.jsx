import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Search from "../components/Search";
import MainDisplay from "../components/MainDisplay";
import Divs from "../components/Divs";
export default function Shop({cart,setCart}) {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>;
      <Search />
      <MainDisplay cart={cart} setCart={setCart}/>
      <Footer />
      <Divs />
    </div>
  );
}
