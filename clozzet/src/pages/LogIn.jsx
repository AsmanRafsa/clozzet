import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function LogIn({cart,setCart}) {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      <div className="container mx-auto">
        <div className="sm:block bg-[url('/home/myc-tech-academy/Desktop/Projects/react/clozzet/src/assets/images/assets/images/login.png')] w-[50%] bg-no-repeat bg-contain flex-1"></div>
        <div>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="shadow-xl p-3 rounded-full m-5"
            />
          </div>
          <div>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="shadow-xl p-3 rounded-full m-5"
            />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <p>Remember Me</p>
            <p>Forgot Password?</p>
          </div>
          <button>Sign In</button>
          <p>OR</p>
          <div>
            <p>Log In With Google</p>
            <p>
              Don't Have An Account Yet?<Link to="/register">Sign Up Free</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
