import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Cart } from "./cart/pages/Cart";
import { Footer } from "./shared/Footer";
import { AllProducts } from "./products/pages/AllProducts";
import Navbar from "./shared/Navbar";
import { Modal } from "./shared/Modal";
import { useGlobal } from "./context/globalContext";
import WishList from "./wishlist/pages/WishList";
import SingleProduct from "./products/pages/SingleProduct";
import SignUpSignIn from "./user/pages/SignUpSignIn";

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
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/authenticate" element={<SignUpSignIn />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
