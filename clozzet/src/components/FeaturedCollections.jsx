import FeaturedCollection from "./FeaturedCollection";
export default function FeaturedCollections({cart,setCart}) {
  return (
    <div>
      <h2 className="font-medium text-4xl text-center py-10">
        Featured Collection
      </h2>
      <FeaturedCollection cart={cart} setCart={setCart}/>
    </div>
  );
}
