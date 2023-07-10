import { AiOutlineShoppingCart } from "react-icons/ai";
// import {FiHeart} from "react-icons/ai";
// import { Heart } from "../assets/images/heart.png";
import AirForce from "../assets/images/shop-images/unisex.png";
export default function SPHero() {
  return (
    <div className="container mx-auto flex text-2xl justify-between items-center">
      <div>
        <img src={AirForce} className="w-[50vw]" />
      </div>
      <div>
        <h2 className="text-[#45C9A1]">SHOES</h2>
        <h1 className="my-7 font-bold text-3xl border-b-[5px] border-black ">
          Unisex Airforce Sneakers
        </h1>
        <p className="my-7 font-bold">KSh 3,500</p>
        <p>
          The sneaker has all sizes which fits to normal size,it is suitable for
          all weather conditions, it is light in <br /> weight making it
          comfortable for a long wear. The <br />
          shoe can be worn by both gender. It is suitable for <br />
          outdoor activities. Buy from our shop, get it
          <br /> delivered to your doorstep and slay the whole day.
        </p>
        <div className="my-10 flex gap-[10em]">
          <div>
            <p>SELECT SIZE</p>
            <div className="flex border-gray-300 border-2 rounded-full p-3 w-50 justify-center gap-5">
                <div><span>40</span></div>
            <select name="" id="" className="bg-white">
              <input type="number" name="" id="" />
            </select>
            </div>
          </div>
          <div>
            <p>QUANTITY</p>
            <div className="flex gap-10 border-gray-300 border-2 border-spacing-5 rounded-full w-50 justify-center p-3">
              <div>-</div>
              <div>0</div>
              <div>+</div>
            </div>
          </div>
        </div>
        <div className="flex gap-[10em]">
          <div className="flex gap-5 bg-[#45C9A1] text-white p-5 rounded-xl font-bold   ">
            <AiOutlineShoppingCart size={25} />
            <button>ADD TO CART </button>
          </div>
          <div>
            {/* <img src={Heart}  /> */}
            <button>SAVE TO WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
}
