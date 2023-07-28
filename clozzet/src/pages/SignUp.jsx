import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import google from "/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/google.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { googleAuth } from "../auth";
export default function SignUp({ cart, setCart }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [currentUser, setCurrentUser] = useState();
  function handleGoogleAuth() {
    googleAuth();
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSignUp(e) {
    e.preventDefault;
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your first name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please enter your last name");
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your email");
    (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
      (errors.phoneNumber = "Please enter your phone number");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your password");
    (formData.confirmPassword === undefined ||
      formData.confirmPassword === "") &&
      (errors.confirmPassword = "Please confirm your password");
    setFormErrors(errors);
    console.log(formData);
    console.log(errors);
  }
  
  return (
    <div>
      <Nav cart={cart} setCart={setCart} />
      <div className="flex">
        <div className="flex-1 m-10">
          <h1 className="text-2xl font-bold text-center">Create An Account</h1>
          <div className="flex gap-3">
            <div className="w-[50%]">
              {formErrors.firstName && (
                <p className="text-red-500  text-center">
                  {formErrors.firstName}
                </p>
              )}
              <div className="rounded-full shadow border-gray-300  border-2 w-[100%] p-5 my-[2em]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none"
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="w-[50%]">
              {formErrors.lastName && (
                <p className="text-red-500  text-center">
                  {formErrors.lastName}
                </p>
              )}
              <div className="rounded-full shadow border-gray-300  border-2 w-[100%] p-5 my-[2em]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none"
                  name="lastName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow border-gray-300  border-2 w-[100%] p-5 my-[2em]">
              {formErrors.email && (
                <p className="text-red-500  text-center">{formErrors.email}</p>
              )}
              <input
                type="email"
                className="outline-none"
                placeholder="Email Address"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            {formErrors.phoneNumber && (
              <p className="text-red-500  text-center">
                {formErrors.phoneNumber}
              </p>
            )}
            <div className="rounded-full shadow border-gray-300  border-2 w-[100%] p-5 my-[2em]">
              <input
                type="text"
                placeholder="Phone Number"
                className="outline-0"
                name="phoneNumber"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            {formErrors.password && (
              <p className="text-red-500  text-center">{formErrors.password}</p>
            )}
            <div className="flex justify-between items-end rounded-full shadow border-gray-300  border-2 w-[100%] p-5 my-[2em]">
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                className="outline-0"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <div
                className="cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              >
                {show ? <BsEyeFill size={25} /> : <BsEyeSlashFill size={25} />}
              </div>
            </div>
          </div>
          <div>
            {formErrors.confirmPassword && (
              <p className="text-red-500  text-center">
                {formErrors.confirmPassword}
              </p>
            )}
            <div className=" flex justify-between items-end rounded-full shadow border-gray-300  border-2 w-[100%] p-5 my-[2em]">
              <input
                type="password"
                className="outline-none"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <button
            onClick={(e) => handleSignUp(e)}
            className=" p-5  bg-[#45C9A1] text-white rounded-full shadow font-bold text-center w-[100%] text-2xl my-[2em]"
          >
            Create Account
          </button>
          <div className=" flex items-center py-4 my-[1em]">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="flex-shrink font-bold ">OR</span>
            <div className="flex-grow h-px bg-gray-400 "></div>
          </div>
          <div
            onClick={handleGoogleAuth}
            className="flex justify-center items-center gap-10 my-[3em]"
          >
            <img src={google} width={30} className="cursor-pointer" />
            <p className="text-2xl font-bold text-blue-500 cursor-pointer">
              Sign In With Google
            </p>
          </div>
          <p className="p-5 text-center">
            Already Have An Account?{" "}
            <Link to="/login" className="text-[#45C9A1]">
              Log In
            </Link>
          </p>
        </div>
        <div className="sm:block  bg-[url('/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/signup.png')] w-[50%] bg-no-repeat bg-contain flex-1"></div>
      </div>
      <Footer />
    </div>
  );
}
