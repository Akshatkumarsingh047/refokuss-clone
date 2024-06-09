import React from "react";
import { Navbar } from "./components/Navbar";

import Stripes from "./components/Stripes";
import Products from "./components/Products";
import { Marques } from "./components/Marques";

import { Footer } from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Work from "./components/Work";
import Cards from "./components/Cards";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div className=" w-full  bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
