import Footer from "../components/Footer";
import Nav from "../components/Nav";
export default function NotFound({cart,setCart}) {
  return (
    <div className="h-[100vh] flex flex-col">
      <Nav className="flex-1" cart={cart} setCart={setCart} />
      <main className="bg-[url('assets/images/NotFound.svg')] bg-no-repeat bg-contain bg-center flex-1 my-8"></main>
      <Footer className="flex-1" />
    </div>
  );
}
