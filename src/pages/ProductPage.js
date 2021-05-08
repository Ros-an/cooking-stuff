import React from "react";
import "./productpage.css";
import { useGlobal } from "../context/globalContext";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { state, dispatch } = useGlobal();
  const { id } = useParams();
  const product = state.products.find((product) => product.id === parseInt(id));
  return (
    <div className="single-product">
      <div className="section-image">
        <img src={product.image} alt={product.name} />
        <div className="control-btn">
          <button
            className="btn-product control-btn__cart pointer-cursor"
            disabled={product.isAddedToCart}
            onClick={() => dispatch({ type: "ADD_TO_CART", payLoad: product })}
          >
            <span> {product.isAddedToCart ? "ADDED" : "ADD TO CART"}</span>
          </button>
          <button
            className="btn-product control-btn__wish pointer-cursor"
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST_FROM_CART", payLoad: product })
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
  );
}

export default ProductPage;
