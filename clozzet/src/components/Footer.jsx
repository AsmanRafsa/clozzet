import Logo from "../assets/images/logo.svg";
import Mail from "../assets/images/email.png";
import Phone from "../assets/images/phone.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
export default function Footer() {
  return (
    <div className="bg-[#F0EFEF]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-10 ">
          <h3>Subscribe & get up to 30% OFF</h3>
          <div className="flex flex-rowb gap-4">
            <input
              type="email"
              className="w-[80%] border-2 border-[#45c9a1] p-2 rounded-full outline-none text-2xl"
              placeholder="Enter your Email"
            />
            <button className="bg-[#45C9A1] text-white rounded-full my-1 p-5 shadow-lg py-4 px[6em]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <img src={Logo} alt="" />
            <p className="pb-8">
              Offering a unique and <br />
              stylish perspective on <br />
              fashion is our number <br />
              one priority. Confuse <br />
              your mirror by our <br />
              trendy outfits.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-extrabold">Store</h2>
            <ul className="flex gap-4 flex-col">
              <li>Women's fashion</li>
              <li>Men's fashion</li>
              <li>Store sale</li>
              <li>Collection</li>
            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="font-extrabold">Help</h2>
            <ul className="flex gap-4 flex-col">
              <li>Customer Support</li>
              <li>Terms&Condition</li>
              <li>Privacy Policy</li>
              <li>Track Your Order</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Contact Us</h2>
            <div className="flex flex-row gap-5">
              <img src={Mail} width={40} />
              <p>contact@clozzet.com</p>
            </div>
            <div>
              <div className="flex flex-row gap-10">
                <img src={Phone} width={40} className="py-3" />
                <p>254-700-333-333</p>
              </div>
              <p>Follow Us</p>
              <div className="flex flex-row gap-5">
                <img src={Facebook} width={40} />
                <img src={Instagram} width={40} />
                <img src={Twitter} width={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
