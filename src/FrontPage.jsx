import React from "react";
import ReactDOM from "react-dom/client";
import WelcomePage from "./WelcomePage";
import BestSellers from "./BestSellers";
import Menu from "./Menu";
import Booking from "./Booking";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Faq from "./Faq";
import Footer from "./Footer";

const Frontpage = () => {
  return (
    <div>
      <WelcomePage />
      <BestSellers />
      <Menu />
      <Booking />
      <OurServices />
      <Testimonials />
      <Newsletter />
      <Faq />
      <Footer />
    </div>
  );
};

export default Frontpage;
