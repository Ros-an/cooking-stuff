import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productpage.css";
import { useGlobal } from "../context/globalContext";
import { useParams, NavLink } from "react-router-dom";
import Rating from "../components/Rating";
import Loading from "./Loader";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLess, setShowLess] = useState(true);
  const { dispatch } = useGlobal();
  const { id } = useParams();
  console.log("roshan", id);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://cooking-stuff-backend.rosan.repl.co/api/products/${id}`
        );
        console.log(response);
        setProduct(response.data.product);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    getData();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <NavLink to="/products">
        <button className="back-btn">Back</button>
      </NavLink>
      <div className="single-product">
        <div className="section-image">
          <img src={product.imageUrl} alt={product.title} />
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
          <h1>{product.title}</h1>
          <Rating rating={product.rating} />
          <h3>Rs. {product.price}</h3>
          <h2>Description</h2>
          <p>
            {showLess
              ? `${product.description.substring(0, 200)}...`
              : product.description}
            <span
              onClick={() => setShowLess(!showLess)}
              className="pointer-cursor showMore"
            >
              {showLess ? " show more" : " show less"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
