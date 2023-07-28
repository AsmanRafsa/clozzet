import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { products } from "../data";
import { StateContext } from "../context/state";
export default function HeroCart() {
  const { cart, setCart } = useContext(StateContext);

  const [copyCart, setCopyCart] = useState([]);
  useEffect(() => {
    setCopyCart(cart);
  }, []);
  function manageCart(action, product) {
    if (action === "add") {
      setCopyCart((prev) => [...prev, product]);
    } else if (action === "remove") {
      const copyCartarray = [...copyCart];
      const productIndex = copyCartarray.indexOf(product);
      copyCartarray.splice(productIndex, 1);
      setCopyCart(copyCartarray);
    }
  }
  return (
    <div>
      <div className="container mx-auto  w-[100%]  my-12 flex justify-between gap-5">
        <div className="border-2  shadow min-w-0 min-h-0">
          <div className="flex justify-around gap-5 text-2xl font-bold border-b-2 border-gray-400 p-[1.5em]">
            <h3>Product</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
          {cart.map((item) => {
            return (
              <div className=" ">
                <div className=" m-[2em] w-[100%] flex gap-5 justify-center items-center">
                  <div className="flex justify-start w-[30%]">
                    <div>
                      <img
                        src={`src/assets/images/${item.img}`}
                        alt=""
                        className="w-[200px]"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-3xl">{item.name}</h4>
                      <p className=" text-3xl">Size: XL</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center border-2 border-gray-500 w-[30%]">
                    <button
                      className=" flex-1"
                      onClick={() => manageCart("remove")}
                      disabled={
                        copyCart.filter((element) => element.name === item.name)
                          .length === 1
                          ? true
                          : false
                      }
                    >
                      <p className="text-3xl font-bold p-4  border-gray-500 text-center">
                        -
                      </p>
                    </button>
                    <button className="flex-1">
                      <p className="text-3xl font-bold  border-gray-500 p-4 border-x-2 text-center">
                        {
                          copyCart.filter(
                            (cartItem) => cartItem.name === item.name
                          ).length
                        }
                      </p>
                    </button>
                    <button
                      className="flex-1"
                      onClick={() => manageCart("add", item)}
                    >
                      <p className="text-3xl font-bold  border-gray-500 p-4 text-center">
                        +
                      </p>
                    </button>
                  </div>
                  <div className="w-[30%]">
                    <p className="font-bold text-3xl text-center">
                      {`Ksh.${copyCart
                        .filter((element) => element.name === item.name)
                        .reduce((acc, curr) => acc + curr.price, 0)
                        .toLocaleString()}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-[40%] h-[35%] bg-gray-300 shadow rounded-[5px]">
          <div className="text-center text-3xl">
            <h4 className="font-bold mt-[1.5em]">Cart Summary</h4>
            <p className="mt-[1.5em]">Have a promo code? Apply here</p>
          </div>
          <div>
            <div className="flex justify-center items-center m-5">
              <div className="m-5">
                <input
                  className=" py-4 px-[.5em]  border-2 text-2xl bg-white outline-0  "
                  type="text"
                  placeholder="Promo Code(optional)"
                />
              </div>
              <div>
                <button className="py-4 px-[2em] text-2xl  text-white bg-[#45C9A1]  font-bold">
                  Apply
                </button>
              </div>
            </div>
            <div className="m-[1em] text-3xl">
              <div className=" flex justify-between  ">
                <h4>Subtotal</h4>
                {/* <p>KSh 16,000</p> */}
                {`Ksh ${copyCart
                  .reduce((acc, curr) => acc + curr.price, 0)
                  .toLocaleString()}`}
              </div>
              <div className=" flex justify-between ">
                <h4>Delivery Fee</h4>
                <p>KSh 450</p>
              </div>
              <div className=" flex justify-between border-t-2 border-gray-400 m-3">
                <h4>Total</h4>
                {`Ksh ${copyCart
                  .reduce((acc, curr) => acc + curr.price, 0 + 450)
                  .toLocaleString()}`}
              </div>
            </div>
            <div className="flex justify-center">
              <button className=" py-4 px-[3em]  border-2 m-5 text-2xl bg-[#45C9A1] items-center ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
