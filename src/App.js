import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { ProductSection } from "./components/ProductionSection";
import { Modal } from "./Modal";
import { Footer } from "./components/Footer";
import { useGlobal } from "./globalContext";

function App() {
  const { state } = useGlobal();
  return (
    <div className="App">
      {state.showModal && <Modal />}
      <Navbar />
      <ProductSection />
      <Footer />
    </div>
  );
}
export default App;
