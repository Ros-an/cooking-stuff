import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { ProductSection } from "./components/ProductionSection";
import { Modal } from "./Modal";
import { Footer } from "./components/Footer";
import Slideshow from "./components/SlideShow";
import { useGlobal } from "./globalContext";

function App() {
  const { state } = useGlobal();
  return (
    <>
      {state.showModal && <Modal />}
      <Navbar />
      <Slideshow />
      <ProductSection />
      <Footer />
    </>
  );
}
export default App;
