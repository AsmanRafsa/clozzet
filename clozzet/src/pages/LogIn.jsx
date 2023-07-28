import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Google from "/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/google.png";
import { useState } from "react";
import "../firebase"
export default function Login({ cart, setCart }) {
  const [formData, setFormData] = useState({});
  const [logInErrors, setLogInErrors] = useState({});
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleProduct(e) {
    e.preventDefault();
    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter  your email");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please Enter Your password");
    
    setLogInErrors(errors);
    console.log(formData);
    console.log(errors);
  }
  return (
    <div>
      <Nav cart={cart} setCart={setCart} />
      <div className="flex">
        <div className="flex-1 bg-[url('/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/login.png')] bg-center bg-no-repeat justify-center bg-contain"></div>
        <div className="flex-1 mx-5">
          <h2 className="font-bold text-4xl text-center my-[1em]">
            Login to your Account
          </h2>
          <div>
            {logInErrors.email && (
                  <p className="text-red-500 text-center mt-5">
                    {logInErrors.email}
                  </p>
                )}
          <div className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[2em]">
            <input
              type="text"
              placeholder="Email Address"
              className="outline-0"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            </div>
          </div>
          <div>
          {logInErrors.password && (
                  <p className="text-red-500 text-center mt-5">
                    {logInErrors.password}
                  </p>
                )}
          <div className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[2em]">
            <input type="text" placeholder="Password" className="outline-0" name="password"  onChange={(e) => handleChange(e)}/>
          </div>
                </div>
          <div className=" flex justify-between my-[3em]">
            <div className="flex gap-5">
              <div>
                <input
                  type="checkbox"
                  className=" cursor-pointer w-7 h-7 shadow border-gray-300  border-2 outline-0"
                />
              </div>
              <p>Remember Me</p>
            </div>
            <div>
              <p className="text-[#45C9A1] cursor-pointer">Forgot Password?</p>
            </div>
          </div>
          <div >
            <button className=" p-7 bg-[#45C9A1] text-white rounded-full shadow font-bold text-center w-[100%] text-2xl my-[0.5em]" onClick={(e) => handleProduct(e)}>Sign In</button>
          </div>
          <div className=" flex items-center py-4 my-[1em]">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="flex-shrink font-bold ">OR</span>
            <div className="flex-grow h-px bg-gray-400 "></div>
          </div>
          <div className="flex justify-center items-center gap-10 my-[3em]">
            <img src={Google} alt="" className="w-[50px] cursor-pointer" />
            <p className="text-blue-600 text-2xl font-bold cursor-pointer">
              Log In With Google
            </p>
          </div>
          <div className="flex justify-center my-[2em]">
            <p>Dont Have An Account Yet?</p>
            <Link to="/register">
              <p className="text-[#45C9A1]">Sign Up Here</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
