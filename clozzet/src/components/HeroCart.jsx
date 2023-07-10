import Stripped from "../assets/images/shop-images/knitted-sweater";
export default function HeroCart() {
  return (
    <div className="container mx-auto">
      <div className="w-[80vh] h-[80vh] shadow bg-white">
        <div className="flex justify-between p-5 border-b-2">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        <img src={Stripped} />  
      </div>
    </div>
  );
}
