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
import PrivateRoute from "./private/PrivateRoute";
import { useAuthContext } from "./context/authContext";
import { useGlobal } from "./context/globalContext";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./shared/Loader";
import Error from "./shared/Error";
// import Spinner from "./asset/spinner.svg";
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
          <Route path="/products/:id" element={<SingleProduct />} />
          <PrivateRoute path="/wishlist" element={<WishList />} />
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
