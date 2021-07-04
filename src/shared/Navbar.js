import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../context/globalContext";
const NavBar = () => {
  const { state } = useGlobal();
  const { cart, wishList } = state;
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
        <NavLink to="/authenticate">
          <div className="login pointer-cursor nav-item--effect">
            <span className="logo-large">SignIn</span>
            <span className="logo-small">
              <i className="far fa-user-circle"></i>
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
