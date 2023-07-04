import Menscolllection from "../assets/images/mens.png";
import watch from "../assets/images/watches.png";
import handbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";
import FeaturedCollection from "../components/FeaturedCollection";

export default function Collections() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 grid-row-3 gap-2">
        <div className=" bg-[#F0EFEF] ">
          <FeaturedCollection
            name="Casual Collection"
            paragraph="Men's Collection"
            description="Shop Now"
            image={Menscolllection}
          
          />
        </div>
        <div className=" bg-[#E3F9FB] ">
          <FeaturedCollection
            name="Casual Collection"
            paragraph="Luxury Watch"
            description="Shop Now"
            image={watch}
          />
        </div>
        <div className=" bg-[#FFF1F1]">
          <FeaturedCollection
            name="Casual Collection"
            paragraph="Free Shipping"
            description="Shop Now"
            image={handbags}
          />
        </div>
        <div className="bg-[#FEDBDB]">
          <FeaturedCollection
            name="Casual Collection"
            paragraph="Ladies Collection"
            description="Shop Now"
            image={ladies}
          />
        </div>
      </div>
    </div>
  );
}
