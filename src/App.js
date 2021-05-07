import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Footer } from "./shared/Footer";
import { ProductSection } from "./pages/ProductionSection";
import Navbar from "./shared/Navbar";
import { Modal } from "./shared/Modal";
import { useGlobal } from "./context/globalContext";
import WishList from "./pages/WishList";
import ProductPage from "./pages/ProductPage";

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
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/products" element={<ProductSection />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
