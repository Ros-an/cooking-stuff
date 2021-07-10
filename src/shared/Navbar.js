import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuthContext } from "../context/authContext";
import { useCartContext } from "../context/cartContext";

function NavBar() {
  const { cart, setCart } = useCartContext();
  let navigate = useNavigate();
  const { userData, setUserData } = useAuthContext();
  const logout = () => {
    auth.signOut();
    setUserData(null);
    setCart(null);
  };
  return (
    <div className="container-flex navbar">
      <div className="logo pointer-cursor nav-item--effect">
        <div onClick={() => navigate(`/`)}>
          {" "}
          <span className="logo-small">
            <i className="fas fa-utensils"></i>
          </span>{" "}
          <span className="logo-large">Cooking-Stuff</span>
        </div>
      </div>
      <div className="nav-item">
        <div className="home pointer-cursor nav-item--effect">
          <NavLink to="/" end>
            Home
          </NavLink>
        </div>
        <div className="home pointer-cursor nav-item--effect">
          <NavLink to="/products">Products</NavLink>
        </div>

        <div className="pointer-cursor nav-item--effect">
          <NavLink to="/cart">
            <div className="badge-icon">
              <i className="fas fa-shopping-bag nav-icon"></i>
              <span
                className="badge-count--status"
                style={{ visibility: cart?.length ? "visible" : "hidden" }}
              >
                {cart?.length}
              </span>
            </div>
          </NavLink>
        </div>
        <div className="pointer-cursor nav-item--effect">
          <NavLink to="/wishlist">
            <div className="badge-icon">
              <i className="fas fa-heart nav-icon"></i>
              <span
                className="badge-count--status"
                style={{
                  visibility: userData?.wishlist.length ? "visible" : "hidden",
                }}
              >
                {userData?.wishlist.length}
              </span>
            </div>
          </NavLink>
        </div>
        {!userData ? (
          <NavLink to="/authenticate">
            <div className="login pointer-cursor nav-item--effect">
              <span>
                <i className="fas fa-sign-in-alt nav-icon"></i>
              </span>
            </div>
          </NavLink>
        ) : (
          <NavLink
            to="/authenticate"
            className="pointer-cursor nav-item--effect"
            onClick={logout}
          >
            <div className="login pointer-cursor nav-item--effect">
              <span>
                <i className="fas fa-sign-out-alt nav-icon"></i>
              </span>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
