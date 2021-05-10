import React from "react";
import "./productpage.css";
import { useGlobal } from "../context/globalContext";
import { useParams, NavLink } from "react-router-dom";

function ProductPage() {
  const { state, dispatch } = useGlobal();
  const { id } = useParams();
  const product = state.products.find((product) => product.id === parseInt(id));
  return (
    <>
      <NavLink to="/products">
        <button className="back-btn">Back</button>
      </NavLink>
      <div className="single-product">
        <div className="section-image">
          <img src={product.image} alt={product.name} />
          <div
            className="out-of-stock"
            style={{ visibility: product.inStock ? "hidden" : "visible" }}
          >
            <div className="out-of-stock--tag">OUT OF STOCK</div>
          </div>
          <div className="control-btn">
            <button
              className="btn-product control-btn__cart pointer-cursor"
              disabled={product.isAddedToCart || !product.inStock}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payLoad: product })
              }
              style={{ cursor: !product.inStock && "no-drop" }}
            >
              <span> {product.isAddedToCart ? "ADDED" : "ADD TO CART"}</span>
            </button>
            <button
              className="btn-product control-btn__wish pointer-cursor"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payLoad: product,
                })
              }
            >
              ADD TO WISHLIST
            </button>
          </div>
        </div>
        <div className="section-detail">
          <h1>this is product name</h1>
          <h3>this is product rating</h3>
          <h3>{product.price}</h3>
          <p>Description detail</p>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
