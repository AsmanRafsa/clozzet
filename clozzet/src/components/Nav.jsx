import Logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icon/ai";
export default function Nav() {
  return (
    <div className="container mx-auto flex justify-between text-2xl">
      <div>
        <ul className="flex justify-between items-center gap-8 py-4">
          <li>
            <img src={Logo} className="w-40" />
          </li>
          <li className="hidden sm:block">
            <a href=""> Home</a>
          </li>
          <li className="hidden sm:block">
            <a href=""> About Us</a>
          </li>{" "}
          <li className="hidden sm:block">
            <a href=""> Shop</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-8 justify-between items-center py-4">
          <li>
            <AiOutlineShoppingCart size={25} />
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <button className="py-2 px-6 rounded-full border-2 border-black">
            Log In
          </button>
        </ul>
      </div>
    </div>
  );
}
