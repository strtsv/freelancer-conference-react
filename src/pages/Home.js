import React from "react";

import Header from "../components/Header";
import Promo from "../components/Home/Promo";
import RoundedImage from "../components/Home/RoundedImage";
import Gallery from "../components/Home/Gallery";
import Schedule from "../components/Home/Schedule";
import Sale from "../components/Home/Sale";
import Pricing from "../components/Home/Pricing";
import Brands from "../components/Home/Brands";
import Contacts from "../components/Home/Contacts";
import Map from "../components/Home/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Promo />
      <RoundedImage />
      <Gallery />
      <Schedule />
      <Sale />
      <Pricing />
      <Brands />
      <Contacts />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
