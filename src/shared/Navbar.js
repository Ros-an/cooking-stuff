import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/globalContext";
import { auth } from "../firebase/firebase";
import { useAuthContext } from "../context/authContext";
function NavBar() {
  const { state } = useGlobal();
  let navigate = useNavigate();
  const { userData, setUserData } = useAuthContext();
  const { cart, wishList } = state;
  const logout = () => {
    auth.signOut();
    setUserData(null);
    navigate(`/authenticate`);
  };
  return (
    <div className="container-flex navbar">
      <div className="logo pointer-cursor nav-item--effect">
        <NavLink to="/">
          {" "}
          <span className="logo-small">
            <i className="fas fa-utensils"></i>
          </span>{" "}
          <span className="logo-large">Cooking-Stuff</span>
        </NavLink>
      </div>
      <div className="nav-item">
        <div className="home pointer-cursor nav-item--effect">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="home pointer-cursor nav-item--effect">
          <NavLink to="/products">Products</NavLink>
        </div>
        <div className="about pointer-cursor nav-item--effect">
          <div className="badge-icon">
            <NavLink to="/cart">
              <i className="fas fa-shopping-bag icon"></i>
              <span
                className="badge-count--status"
                style={{ visibility: cart.length ? "visible" : "hidden" }}
              >
                {cart.length}
              </span>
            </NavLink>
          </div>
          <div className="badge-icon">
            <NavLink to="/wishlist">
              <i className="fas fa-heart icon"></i>
              <span
                className="badge-count--status"
                style={{ visibility: wishList.length ? "visible" : "hidden" }}
              >
                {wishList.length}
              </span>
            </NavLink>
          </div>
        </div>
        {!userData ? (
          <NavLink to="/authenticate">
            <div className="login pointer-cursor nav-item--effect">
              <span className="logo-large">SignIn</span>
            </div>
          </NavLink>
        ) : (
          <div className="pointer-cursor nav-item--effect" onClick={logout}>
            SignOut
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
