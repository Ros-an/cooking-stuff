import { useGlobal } from "../context/globalContext";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filterContext";
import SearchAndSort from "./SearchAndSort";
import Rating from "./Rating";

export const Products = () => {
  const { state, dispatch } = useGlobal();
  const { filtered_products } = useFilterContext();
  const customStyle = {
    color: "red",
  };
  function wishItemToggle(id) {
    if (state.wishList.some((e) => e.id === id)) {
      return customStyle;
    }
    return null;
  }
  return (
    <>
      <div className="product-block">
        <SearchAndSort />
        <div className="product-part">
          {filtered_products.map((item) => {
            const { inStock } = item;
            return (
              <div className="card" key={item._id}>
                <div className="card-image">
                  <img src={item.imageUrl} alt={item.title} />

                  <button
                    style={wishItemToggle(item._id)}
                    className="pointer-cursor"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_WISHL_PRODUCTS",
                        payLoad: item,
                      });
                    }}
                  >
                    ❤
                  </button>
                </div>

                <div
                  className="out-of-stock"
                  style={{ visibility: inStock ? "hidden" : "visible" }}
                >
                  <div className="out-of-stock--tag">OUT OF STOCK</div>
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <Rating rating={item.rating} />
                  <p>₹ {item.price}</p>
                </div>
                <Link
                  to={`/products/${item._id}`}
                  className="link-to-page"
                ></Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
