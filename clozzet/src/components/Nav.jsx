import Logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { StateContext } from "../context/state";
export default function Nav() {
  const { cart, setCart } = useContext(StateContext);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems && setCart(cartItems);
    // console.log(cartItems);
  }, []);
  return (
    <div className="container mx-auto flex justify-between text-2xl">
      <div>
        <ul className="flex justify-between items-center gap-8 py-4">
          <li>
            <Link to="/">
              <img src={Logo} className="w-40" />
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/"> Home</Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/aboutus"> About Us</Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/shop"> Shop</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-8 justify-between items-center py-4">
          <Link to="/cart">
            <li>
              <AiOutlineShoppingCart size={25} />
              {cart.length > 0 && (
                <div className="bg-[#45C9A1] w-[20px] h-[20px] rounded-full flex justify-center items-center text-sm absolute bottom-[96%] right-[23%]">
                  {cart.length}
                </div>
              )}
            </li>
          </Link>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <Link to="/login">
            <button className="py-2 px-6 rounded-full border-2 border-black">
              Log In
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
