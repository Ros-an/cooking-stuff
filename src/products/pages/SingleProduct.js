import React, { useEffect, useState } from "react";
import { MiniLoader } from "../../shared/Loader";
import axios from "axios";
import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../context/authContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addToWishList, addToCart } from "../index";
import Rating from "../components/Rating";
import Loader from "../../shared/Loader";
import "./SingleProduct.css";

export function present(data, id) {
  if (data?.some((e) => e._id === id)) {
    return true;
  }
  return false;
}
function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [showLess, setShowLess] = useState(true);
  const { cart, setCart } = useCartContext();
  let location = useLocation();
  let navigate = useNavigate();
  const { userData, setUserData } = useAuthContext();
  const [loader, setLoader] = useState(false);
  const [loaderOne, setLoaderOne] = useState(false);

  // const { dispatch } = useGlobal();
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://cooking-stuff-backend.rosan.repl.co/api/products/${id}`
        );
        setProduct(response.data.product);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [id]);

  const isAuthorisedWishlist = (item) => {
    if (userData) {
      addToWishList(item._id, userData, setLoader, setUserData);
    } else {
      return navigate(
        `/authenticate`,
        { state: { from: location.pathname } },
        { replace: true }
      );
    }
  };
  const isAuthorisedCart = (item) => {
    if (cart) {
      addToCart(userData._id, item._id, setLoaderOne, setCart);
    } else {
      return navigate(
        `/authenticate`,
        { state: { from: location.pathname } },
        { replace: true }
      );
    }
  };
  return (
    <>
      {!product && <Loader />}
      {product && (
        <>
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
                  disabled={!product.inStock}
                  style={{ cursor: !product.inStock && "no-drop" }}
                  onClick={() => isAuthorisedCart(product)}
                >
                  <span>
                    {loaderOne ? (
                      <MiniLoader size={{ height: "2rem", width: "2rem" }} />
                    ) : present(cart, product._id) ? (
                      "ADDED"
                    ) : (
                      "ADD TO CART"
                    )}
                  </span>
                </button>
                <button
                  className="btn-product control-btn__wish pointer-cursor"
                  onClick={() => isAuthorisedWishlist(product)}
                >
                  {loader ? (
                    <MiniLoader spinner={true} />
                  ) : present(userData?.wishlist, product._id) ? (
                    "ADDED"
                  ) : (
                    "ADD TO WISH"
                  )}
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
      )}
    </>
  );
}

export default SingleProduct;
