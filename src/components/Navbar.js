import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../globalContext";
const NavBar = () => {
  const { state } = useGlobal();
  const { cart } = state;
  return (
    <div className="container-grid navbar">
      <div className="logo pointer-cursor nav-item--effect">Cooking-Stuff</div>
      <div className="search">
        <div className="search-block">
          <input type="search" placeholder="search" className="navbar-search" />
          <button className="search-btn pointer-cursor">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
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
            <span class="badge-count--status">{cart.length}</span>
          </NavLink>
        </div>
        <div class="badge-icon">
          <i class="fas fa-heart icon"></i>
          <span class="badge-count--status">7</span>
        </div>
      </div>
      <div className="login pointer-cursor nav-item--effect">User</div>
    </div>
  );
};

export default NavBar;
