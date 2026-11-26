import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import HomePackages from "../components/HomePackages";
import HomeExams from "../components/HomeExams";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import LocationContact from "../components/LocationContact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <HomePackages />
      <HomeExams />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <LocationContact />
    </>
  );
}
