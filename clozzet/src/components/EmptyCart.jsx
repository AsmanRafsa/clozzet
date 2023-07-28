import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <div className="container mx-auto">
        <div className="shadow border-2 rounded-[5px] m-[2em] flex flex-col items-center">
      <MdRemoveShoppingCart className="w-[100%] h-[20vh]"/>
      <h4 className="text-4xl font-bold text-center my-[1em]">
        The Cart <span className="text-[#45C9A1]">Is Empty</span>
      </h4>
     <Link to="/shop"> <button className="bg-[#45c9a1] p-5 my-2 text-white rounded-full border-2">Shop Now</button></Link>
      </div>
    </div>
  );
}
