import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import tshirt from "../assets/images/tshirt.png";
import dresses from "../assets/images/dress.png";
import jeans from "../assets/images/jeans.png";
import shoes from "../assets/images/shoe.png";
import sweater from "../assets/images/sweater.png";
import TopCategory from "../components/TopCategory";
export default function TopCategories() {
  return (
    <div>
      <h2 className="text-5xl text-center mt-5">Top Categories</h2>
      <div className="flex container mx-auto justify-between my-10">
        <TopCategory icon={jacket} category="Jackets" />
        <TopCategory icon={handbag} category="Handbags" />
        <TopCategory icon={tshirt} category="Shirts" />
        <TopCategory icon={dresses} category="Dresses" />
        <TopCategory icon={jeans} category="Jeans" />
        <TopCategory icon={shoes} category="Shoes" />
        <TopCategory icon={sweater} category="Sweater" />
      </div>
    </div>
  );
}
