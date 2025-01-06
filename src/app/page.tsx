import Header from "./header/page";
import Banner from "./banner/page";
import Hallmark from "./hallmark/page";
import Products from "./products/page";
import Pricing from "./pricing/page";
import AboutUs from "./us/page";
import ContactUs from "./contact/page";
import Location from "./location/page";
import Footer from "./footer/page";



export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Hallmark />
      <Products />
      <Pricing />
      <ContactUs  />
      <AboutUs />
      <Location />
      <Footer />
    </>
  );
}
