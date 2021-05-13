import "./buttons.css";
import { NavLink } from "react-router-dom";

export const AllProducts = () => {
  return (
    <div className="all-products-btn">
      <NavLink
        to="/products"
        activeStyle={{
          textDecoration: "none",
        }}
      >
        <button className="all-products pointer-cursor">ALL PRODUCTS</button>
      </NavLink>
    </div>
  );
};
