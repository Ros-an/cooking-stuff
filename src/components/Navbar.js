import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../globalContext";
const NavBar = () => {
  const { state } = useGlobal();
  const { cart, wishList } = state;
  return (
    <div className="container-grid navbar">
      <div className="logo pointer-cursor nav-item--effect">
        {" "}
        <span className="logo-small">
          <i class="fas fa-utensils"></i>
        </span>{" "}
        <span className="logo-large">Cooking-Stuff</span>
      </div>
      <div className="search"></div>
      <div className="home pointer-cursor nav-item--effect">
        <NavLink
          to="/"
          activeStyle={{
            textDecoration: "none",
          }}
        >
          Home
        </NavLink>
      </div>
      <div className="about pointer-cursor nav-item--effect">
        <div class="badge-icon">
          <NavLink
            to="/cart"
            activeStyle={{
              textDecoration: "none",
            }}
          >
            <i class="fas fa-shopping-bag icon"></i>
            <span
              class="badge-count--status"
              style={{ visibility: cart.length ? "visible" : "hidden" }}
            >
              {cart.length}
            </span>
          </NavLink>
        </div>
        <div class="badge-icon">
          <NavLink
            to="/wishlist"
            activeStyle={{
              textDecoration: "none",
            }}
          >
            <i class="fas fa-heart icon"></i>
            <span
              class="badge-count--status"
              style={{ visibility: wishList.length ? "visible" : "hidden" }}
            >
              {wishList.length}
            </span>
          </NavLink>
        </div>
      </div>
      <div className="login pointer-cursor nav-item--effect">User</div>
    </div>
  );
};

export default NavBar;
