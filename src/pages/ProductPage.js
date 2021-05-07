import React from "react";
import "./productpage.css";
import { useGlobal } from "../context/globalContext";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { state } = useGlobal();
  const { id } = useParams();
  const product = state.products.find((product) => product.id === parseInt(id));
  return (
    <div className="single-product">
      <div className="section-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="section-detail">
        <h1>this is product name</h1>
        <h3>this is product rating</h3>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
}

export default ProductPage;
