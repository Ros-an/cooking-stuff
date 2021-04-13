import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
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
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
