import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Cart } from "./cart/pages/Cart";
import { Footer } from "./shared/Footer";
import { AllProducts } from "./products/pages/AllProducts";
import Navbar from "./shared/Navbar";
import WishList from "./wishlist/pages/WishList";
import SingleProduct from "./products/pages/SingleProduct";
import SignUpSignIn from "./user/pages/SignUpSignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
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
      <ToastContainer />
      <Footer />
    </>
  );
}
export default App;
