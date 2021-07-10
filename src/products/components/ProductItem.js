import { useState } from "react";
import { MiniLoader } from "../../shared/Loader";
import Rating from "./Rating";
// import { useGlobal } from "../../context/globalContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { addToWishList, toggleWishListItem } from "../index";

function ProductItem({ item }) {
  // const { state, dispatch } = useGlobal();
  const { userData, setUserData } = useAuthContext();
  const [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  const customStyle = {
    color: "red",
  };
  function wishItemToggle(id) {
    if (userData?.wishlist.some((e) => e._id === id)) {
      return customStyle;
    }
    return null;
  }
  const isAuthorised = (item) => {
    if (userData) {
      const added = userData.wishlist.some((e) => e._id === item._id);
      added
        ? toggleWishListItem(item._id, userData, setLoader, setUserData)
        : addToWishList(item._id, userData, setLoader, setUserData);
    } else {
      return navigate(
        `/authenticate`,
        { state: { from: location.pathname } },
        { replace: true }
      );
    }
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.title} />

        <button
          style={wishItemToggle(item._id)}
          className="pointer-cursor"
          onClick={() => isAuthorised(item)}
        >
          {loader ? <MiniLoader size={{ height: "1em", width: "1em" }} /> : `❤`}
        </button>
      </div>

      <div
        className="out-of-stock"
        style={{ visibility: item.inStock ? "hidden" : "visible" }}
      >
        <div className="out-of-stock--tag">OUT OF STOCK</div>
      </div>
      <div className="card-content">
        <h4>{item.title}</h4>
        <Rating rating={item.rating} />
        <p>₹ {item.price}</p>
      </div>
      <Link to={`/products/${item._id}`} className="link-to-page"></Link>
    </div>
  );
}

export default ProductItem;
