import { useGlobal } from "../globalContext";
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
      <div className="product-section__subsection product-part">
        {state.products.map((item) => {
          const { inStock } = item;
          return (
            <div class="card" style={{ boxShadow: !inStock && "none" }}>
              <div class="card-image">
                <img src={item.image} />
                <button
                  style={wishItemToggle(item.id)}
                  class="pointer-cursor"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_WISHL", payLoad: item });
                  }}
                >
                  ❤
                </button>
              </div>
              <div
                class="out-of-stock"
                style={{ visibility: inStock ? "hidden" : "visible" }}
              >
                <div class="out-of-stock--tag">OUT OF STOCK</div>
              </div>
              <div class="card-content">
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
    </>
  );
};
