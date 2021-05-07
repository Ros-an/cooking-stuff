import "./buttons.css";
import { useGlobal } from "../context/globalContext";
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

export const AddToCartButton = ({ item }) => {
  const { dispatch } = useGlobal();
  return (
    <>
      <button
        disabled={item.isAddedToCart}
        style={{ margin: "0" }}
        class="btn-product cart-btn"
        onClick={() => dispatch({ type: "ADD_TO_CART", payLoad: item })}
      >
        <span>
          <i class="fas fa-cart-plus"></i>
        </span>
        <span> {item.isAddedToCart ? "ADDED" : "ADD TO CART"}</span>
      </button>
    </>
  );
};
