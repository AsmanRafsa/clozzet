import { useState } from "react";
export default function NewProducts() {
  const [formData, setFormData] = useState({});
  const [productErrors, setProductErrors] = useState({});
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleProduct(e) {
    e.preventDefault();
    const errors = {};
    (formData.productName === undefined || formData.productName === "") &&
      (errors.productName = "Please enter  your product name");
    (formData.price === undefined || formData.price === "") &&
      (errors.price = "Please enter your price");
    (formData.productImage === undefined || formData.productImage === "") &&
      (errors.productImage = "Please upload the product image");
    (formData.productDescription === undefined || productDescription === "") &&
      (errors.productDescription = "Please enter the product description");

    setProductErrors(errors);
    console.log(formData);
    console.log(errors);
  }
  return (
    <div className="">
      <h4 className="text-center text-[3rem] font-bold">Add New Product</h4>
      <div className=" flex justify-center text-[1rem]">
        <div className="border-2 w-[50%] shadow my-[2em]">
          {/* <div className=""> */}
          <div className=" my-[1em]">
            {productErrors.productName && (
              <p className="text-red-500 text-center mt-10">
                {productErrors.productName}
              </p>
            )}
            <div className="flex justify-center">
              <input
                className="py-4 px-2 w-[80%]  border-2 text-2xl bg-white outline-0 mt-3 shadow rounded-md text-left"
                name="productName"
                type="text"
                placeholder="Product Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            {productErrors.price && (
              <p className="text-red-500 text-center">{productErrors.price}</p>
            )}
            <div className="flex justify-center">
              <input
                className="py-4 px-2 w-[80%]   border-2 text-2xl bg-white outline-0 m-5 shawdow rounded-md"
                name="price"
                type="text"
                placeholder="Price"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <select
              className="py-4 px-2 w-[80%]   border-2 text-2xl bg-white outline-0 m-5 shadow rounded-md"
              name=""
              id=""
            >
              <option>category</option>
            </select>
          </div>
          <div>
            {productErrors.productImage && (
              <p className="text-red-500 text-center">
                {productErrors.productImage}
              </p>
            )}
            <div className="py-4 px-2 w-[80%]  border-2 text-[1rem] bg-white outline-0 m-5 shadow rounded-md  mx-auto ">
              <input
                className=""
                type="file"
                name="productImage"
                placeholder="Upload Product Image"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            {productErrors.productDescription && (
              <p className="text-red-500 text-center">
                {productErrors.productDescription}
              </p>
            )}
            <div className="flex justify-center ">
              <input
                className="py-4 px-2 w-[80%]  text-start  border-2 text-2xl bg-white outline-0 m-5  shadow rounded-md"
                name="detailedProductDescription"
                type="text"
                placeholder="Detailed Product Description"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex justify-center my-[2em]">
            <button
              className="p-4 px-[7em] rounded-full border-2  text-white bg-[#45C9A1] text-1xl font-bold"
              onClick={(e) => handleProduct(e)}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
