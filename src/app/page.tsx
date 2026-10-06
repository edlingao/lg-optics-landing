import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Brands from "../components/Brands";
import LocationContact from "../components/LocationContact";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <LocationContact />
    </>
  );
}
