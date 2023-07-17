import mision from "../assets/images/about-page-images/mision.png";
import vision from "../assets/images/about-page-images/vision.png";
import values from "../assets/images/about-page-images/values.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function AboutUs({ cart, setCart }) {
  return (
    <div className="">
      <Nav cart={cart} setCart={setCart} />
      <div className="bg-[url('src/assets/images/about-page-images/about-bg.png')] bg-no-repeat bg-cover  bg-center w-[100vw] h-[50vh] relative ">
        <div className="flex justify-center absolute translate-y-48 right-0 left-0">
          <p className=" bg-gray-200 py-5 px-10 text-[4rem] font-bold">
            About Us
          </p>
        </div>
      </div>
      <div>
        <div className="mt-[2em] container mx-auto ">
          <h4 className="text-center mb-[1em] text-[2rem] font-bold">
            Who We Are
          </h4>
          <p className="w-[100%] mb-[2em] text-[1.5rem]">
            Clozzet, Kenya's no. 1 online retailer was established in May 2013
            with the aim and vision to become the one-stop shop for retail in
            Kenyawith implementation of best practices both online and offline.
            Clozzet is the largest online retail store in Kenya. At inception we
            did anaverage delivery time of a week, today we do, on average,
            delivery in 1-5 days.
          </p>
          <p className="w-[100%] mb-[2em] text-[1.5rem]">
            Initially starting with 3 employees, Clozzet presently has a staff
            strength of 1000 young and entrepreneurial Kenyans including our
            150man strong customer service team available 7 days a week. We do
            country-wide delivery. Clozzet set-up the 1st e-commerce academy
            in Kenya, the Clozzet Academy, building young entrepreneurs
            pioneering various aspects of businesses.
          </p>
          <p className="w-[100%] mb-[2em] text-[1.5rem]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sitaspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquamest, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit,
          </p>
          <div className="flex justify-center gap-[3em]">
            <div className="border-2 border-2-gray p-2 w-[35%] h-[100%] shadow">
              <div className="flex justify-center">
                <img className="mt-5 w-[150px] " src={mision} alt="" />
              </div>
              <h4 className="text-center text-3xl mt-5 font-bold ">Mision</h4>
              <p className=" text-2xl text-center m-[1em] mt-6">
                To innovate, to lead, to enhance,to provide best-value
                productsand services to global customers?and enhance the quality
                of life forour customers and employees.
              </p>
            </div>
            <div className="border-2 border-2-gray p-2 w-[35%] h-[100%] shadow">
              <div className="flex justify-center">
                <img className="mt-5 w-[150px] " src={vision} alt="" />
              </div>
              <h4 className="text-center text-3xl mt-5 font-bold">Vision</h4>
              <p className=" text-[1.5em] text-center m-[1.5em] mt-6">
                To be a global leader in fashion-knit & fashion outerwear
                byempowering innovation anddesign to provide total
                customersatisfaction.
              </p>
            </div>
            <div className="border-2 border-2-gray p-2 w-[35%] h-[100%] ">
              <div className="flex justify-center">
                <img className="mt-5 w-[150px] " src={values} alt="" />
              </div>
              <h4 className="text-center text-3xl mt-5 font-bold">
                Core Values
              </h4>

              <div className=" text-2xl text-center  mt-6 mb-6 p-3">
                <li className="">Passion</li>
                <li className="">Perfomance</li>
                <li className="">Simplicity</li>
                <li className="">Togetherness</li>
              </div>
            </div>
          </div>
          <div className="mt-[2em]">
            <h4 className="text-center mt-[2em] mb-[1em] text-[2rem] font-bold">
              Our History
            </h4>
            <p className="text-[1.5rem]">
              In the year 2013, Cozzet became a part of the apparel
              manufacturing industry of India. In term of over a decade, our
              company has developed rapidly and at the current moment employs
              more than 1000 employees at our factory sites.CLOZZET is an
              integrated apparel manufacturer with the comprehensive capability
              to design and manufacture readymade garments with high quality for
              the Global Market, with a very competitive price. Our company can
              produce various kinds of garment, in various styles, across three
              categories which includes – flat-knit sweaters, outerwear jackets
              and circular knit t-shirts, sweatshirts & joggers, among which
              are, apparels for Men, Women , Kids and Babywear with a total
              capacity that reaches 12,00,000 , 2,50,000 & 10,00,000 pieces
              respectively, per annum. In producing high quality products, our
              company is supported by sophisticated technology and framework,
              which is helped by manpower and a capable and appressed team of
              experts who have helped us gain a local dominance over our field
              of expertise. With the abutment of complete CLOZZET family, we
              have been able to generate a total revenue of 1.2 BILLION INR in
              the year 2016-17 We slowly built our reputation & started getting
              more business. Various international brands vested their design
              and outsourcing requirements and have received satisfactory
              creative and economically viable results. Starting with such a
              small production order from Levi’s now Clozzet Clothing Co.
              Limited. has grown rapidly and has been catering to the global
              leading apparel brands and growing its network all across the
              world.
            </p>
          </div>
        </div>
      </div>
      <Footer cart={cart} setCart={setCart} />
    </div>
  );
}
