import { Link } from "react-router-dom";

// import { AiOutlineSearch } from "react-icon/ai";
export default function Hero() {
  return (
    <div className="container mx-auto my-0 flex items-center">
      <div className="w-[100] sm:w-[50%]">
        <h1 className="text-3xl my-6 font-normal sm:text-5xl">
          Choose the look that <span className="text-[#45C9A1]">suits  </span>you
          best
        </h1>
        <p className="text-[1.5rem]">
          Every day is a fashion show & the world is your runway. Clozzet will
          elevate your wardrobe with the best collections. Be exclusive, Be
          Devine, Be yourself. Explore outfits that will make you comfortably
          beautiful.True style never dies.
        </p>
        <div className="flex gap-10 mt-3">
         <Link to="/shop"> <button className="bg-[#45C9A1] text-white text-2xl rounded-full my-1 p-5 shadow-lg py-4 px[6em]">
            Shop Now
          </button></Link>
          <button className=" bg-white text-[#45C9A1] text-2xl rounded-full p-5 shadow-lg py-4 px[6em]">
            About Us
          </button>
        </div>
        <div className="border-2 rounded-full mt-6 flex justify-start items-center p-3">
          {/* <AiOutlineSearch size={50} /> */}
          <input
            type="text"
            className="w-[100%] sm-w-[50%] p-1 border-1 outline-none text-4xl"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="hidden sm:block bg-[url('assets/images/hero2.png')] h-[60vh] w-[50%] bg-no-repeat bg-contain bg-right">
        
      </div>

    </div>
  );
}
