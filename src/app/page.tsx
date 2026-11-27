import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import HomeCategories from "../components/HomeCategories";
import HomePackages from "../components/HomePackages";
import HomeExams from "../components/HomeExams";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <HomeCategories />
      <HomePackages />
      <HomeExams />
      <Testimonials />
      <Brands />
    </>
  );
}
