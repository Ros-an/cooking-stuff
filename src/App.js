import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { ProductSection } from "./components/ProductionSection";
import Navbar from "./components/Navbar";
import { Modal } from "./Modal";
import { useGlobal } from "./globalContext";
import WishList from "./components/WishList";

function App() {
  const { state } = useGlobal();
  return (
    <>
      {state.showModal && <Modal />}
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<WishList />} />
          <Route path="/products" element={<ProductSection />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
