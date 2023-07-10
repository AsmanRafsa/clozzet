import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TopCategories from "../components/TopCategories";
import Footer from "../components/Footer";
import Category from "../components/FeaturedCategories";
import FeaturedCollections from "../components/FeaturedCollections";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('assets/images/background1.png')] bg-no-repeat bg-right-top bg-contain">
        <Nav />;
        <Hero />
      </div>
      <TopCategories />
      <FeaturedCollections />
      <Category />
      <Footer />
    </div>
  );
}
