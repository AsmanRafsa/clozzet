import { products } from "../data";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { addToCart, addToCartText } from "../helpers";

export default function FeaturedCollection({ cart, setCart }) {
  return (
    <div
      className="container mx-auto flex flex-row my-[100px] gap-5 justify-center items-center
    "
    >
      {/* {console.log(cart)}  */}
      <div>
        <AiOutlineLeft size={30} className="cursor-pointer" />
      </div>
      {products.map((item) => {
        if (item.featured) {
          return (
            <div>
              <div className="h-[400px] w-[400px] relative group">
                <img
                  className="h-[100%] w-[100%] object-contain bg-[#F0EFEF]"
                  src={`src/assets/images/shop-images/${item.img}`}
                />
                <button
                  onClick={(e) => addToCart(e, item, cart, setCart)}
                  type="submit"
                  className=" text-white bg-[#45C9A1] btn invisible group-hover:visible rounded-[5px] p-5 py-5 absolute bottom-2 left-0 w-[95%] m-2 px[6em]"
                >
                  {addToCartText(cart,item)}
                </button>
              </div>
              <div className="text-2xl">
                <p>{item.name}</p>
                <h3>{item.price}</h3>
              </div>
            </div>
          );
        }
      })}
      <div>
        <AiOutlineRight size={30} className="cursor-pointer" />
      </div>
    </div>
  );
}
