import Menscolllection from "../assets/images/mens.png";
import watch from "../assets/images/watches.png";
import handbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";
import FeaturedCategory from "./FeaturedCategory";

export default function Category() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 grid-rows-[200px_200px_200px] gap-3">

        <div className=" bg-[#F0EFEF] row-span-2">
          <FeaturedCategory
            name="Casual Collection"
            paragraph="Men's Collection"
            description="Shop Now"
            image={Menscolllection}
          />
        </div>
        <div className=" bg-[#E3F9FB] ">
          <FeaturedCategory
            name="Casual Collection"
            paragraph="Luxury Watch"
            description="Shop Now"
            image={watch}
          />
        </div>
        <div className="bg-[#FEDBDB] row-span-2">
          <FeaturedCategory
            name="Casual Collection"
            paragraph="Ladies Collection"
            description="Shop Now"
            image={ladies}
          />
        </div>
        <div className=" bg-[#FFF1F1]">
          <FeaturedCategory
            name="Casual Collection"
            paragraph="Free Shipping"
            description="Shop Now"
            image={handbags}
          />
        </div>
      </div>
    </div>
  );
}
