import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TopCategories from "../components/TopCategories";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('assets/images/background1.png')] bg-no-repeat bg-right-top bg-contain">
        <Nav />;
        <Hero />
      </div>
      <TopCategories />
      <Collections/>
      <Footer />
    </div>
  );
}
