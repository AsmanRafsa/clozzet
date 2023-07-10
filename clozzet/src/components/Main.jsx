import { products } from "../data";
export default function Main() {
    return (
        <div
          className="container mx-auto flex flex-row my-[100px] gap-7 justify-center items-center flex-wrap
        "
        >

          {products.map((item) => {
            if (item.featured) {
              return (
                <div>
                  <div className="h-[400px] w-[300px] relative group my-3">
                    <img
                      className="h-[100%] w-[100%] object-contain bg-[#F0EFEF]"
                      src={`src/assets/images/shop-images/${item.img}`}
                    />
                    <button type="submit" className=" text-white bg-[#45C9A1] btn invisible group-hover:visible rounded-[5px] p-5 py-5 absolute bottom-2 left-0 w-[95%] m-2 px[6em]">ADD TO CART</button>
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <h3 className="text-[#45C9A1]">{item.price}</h3>
                  </div>
                </div>
              );
            }
          })}

        </div>
      );          }

      
