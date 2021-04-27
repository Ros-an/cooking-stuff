import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../globalContext";
const NavBar = () => {
  const { state } = useGlobal();
  const { cart, wishList } = state;
  return (
    <div className="container-flex navbar">
      <div className="logo pointer-cursor nav-item--effect">
        {" "}
        <span className="logo-small">
          <i class="fas fa-utensils"></i>
        </span>{" "}
        <span className="logo-large">
          <NavLink to="/">Cooking-Stuff</NavLink>
        </span>
      </div>
      <div className="nav-item">
        <div className="home pointer-cursor nav-item--effect">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="home pointer-cursor nav-item--effect">
          <NavLink to="/products">Products</NavLink>
        </div>
        <div className="about pointer-cursor nav-item--effect">
          <div class="badge-icon">
            <NavLink to="/cart">
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
            <NavLink to="/wishlist">
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
    </div>
  );
};

export default NavBar;
