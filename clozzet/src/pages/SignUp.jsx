import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import google from "/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/google.png";

export default function SignUp({cart,setCart}) {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      <div className="flex">
      <div className="w-[50%] m-10">
        <h1 className="text-2xl font-bold text-center">Create An Account</h1>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="shadow-xl p-3 rounded-full m-5 w-[25%]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="shadow-xl p-3 rounded-full m-5 w-[25%]"
          />
        </div>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="shadow-xl p-3 rounded-full m-5 w-[50%]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className="shadow-xl p-3 rounded-full m-5 w-[50%]"
          />
        </div>
        <div>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="shadow-xl p-3 rounded-full m-5 w-[50%]"
          />
        </div>
        <div>
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            className="shadow-xl p-3 rounded-full m-5 w-[50%]"
          />
        </div>
        <button className=" text-white bg-[#45C9A1] rounded-full p-5 py-5  m-2 px[6em] w-[50%]">
          Create Account
        </button>
        <p className="text-center my-1">OR</p>
        <div className="flex gap-10 my-5 shadow-xl rounded-full w-[50%] p-3">
            <img src={google} width={30}/>
          <p className="text-2xl font-bold text-blue-500">Sign Up With Google</p>
        </div>
        <p className="p-5">
          Already Have An Account? <Link to="/login" className="text-[#45C9A1]">Log In</Link>
        </p>
      </div>
        <div className="sm:block bg-[url('/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/signup.png')] w-[50%] bg-no-repeat bg-contain flex-1"></div>
        </div>
      <Footer />
    </div>
  );
}
