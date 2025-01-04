import Header from "./header/page";
import Banner from "./banner/page";
import Hallmark from "./hallmark/page";
import Products from "./products/page";
import Pricing from "./pricing/page";
import AboutUs from "./us/page";
import ContactUs from "./contact/page";
import Location from "./location/page";
import localFont from "@next/font/local";


const yaaFont = localFont({
  src: "/assets/artill_yaa_type_light[demo].ttf",
  variable: "--yaa-font",
  display:"swap"
});

const rootsFont = localFont({
  src: "/assets/roots-n-branches.regular.ttf",
  variable: "--roots-font",
  display:"swap"
});

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
    </>
  );
}
