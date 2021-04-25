import { useGlobal } from "../globalContext";
import SearchAndSort from "./SearchAndSort";
import { AddToCartButton } from "./Buttons";
export const Products = () => {
  const { state, dispatch } = useGlobal();

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
          {state.products.map((item) => {
            const { inStock } = item;
            return (
              <div
                className="card"
                style={{ boxShadow: !inStock && "none" }}
                key={item.id}
              >
                <div className="card-image">
                  <img src={item.image} />
                  <button
                    style={wishItemToggle(item.id)}
                    className="pointer-cursor"
                    onClick={() => {
                      dispatch({ type: "ADD_TO_WISHL", payLoad: item });
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
                  <p>Rating</p>
                  <h4>Product name</h4>
                  <p>₹ {item.price}</p>
                  <p>little</p>
                  <AddToCartButton item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
