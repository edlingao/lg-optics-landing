
import Header from "./header/page";
import Banner from "./banner/page";
import Hallmark from "./hallmark/page";
import Products from "./products/page";
import Pricing from "./pricing/page";
import AboutUs from "./us/page";
import ContactUs from "./contact/page";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Hallmark />
      <Products />
      <Pricing />
      <AboutUs />
      <ContactUs  />
    </>
  );
}
