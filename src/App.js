import React from "react";
import { AllProducts } from "./products/pages/AllProducts";
import { Cart } from "./cart/pages/Cart";
import { Error, NotFound } from "./shared/Error";
import { Footer } from "./shared/Footer";
import { Home } from "./home/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuthContext } from "./context/authContext";
import { useGlobal } from "./context/globalContext";
import Checkout from "./cart/pages/Checkout";
import Loader from "./shared/Loader";
import Navbar from "./shared/Navbar";
import SingleProduct from "./products/pages/SingleProduct";
import SignUpSignIn from "./user/pages/SignUpSignIn";
import PrivateRoute from "./private/PrivateRoute";
import WishList from "./wishlist/pages/WishList";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const { error } = useGlobal();
  const { loader } = useAuthContext();
  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error.message} />;
  }
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <PrivateRoute path="/cart" element={<Cart />} />
          <PrivateRoute path="/wishlist" element={<WishList />} />
          <PrivateRoute path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/authenticate" element={<SignUpSignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}
export default App;
