import React from "react";
import Slideshow from "../components/SlideShow";
import { AllProducts } from "../shared/Buttons";
import Brand from "../components/Brand";

export const Home = () => {
  return (
    <>
      <Slideshow />
      <AllProducts />
      <Brand />
    </>
  );
};
