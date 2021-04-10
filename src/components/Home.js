import React from "react";
import Slideshow from "./SlideShow";
import { AllProducts } from "./Buttons";
import { ProductSection } from "./ProductionSection";

export const Home = () => {
  return (
    <>
      <Slideshow />
      <AllProducts />
      <ProductSection />
    </>
  );
};
