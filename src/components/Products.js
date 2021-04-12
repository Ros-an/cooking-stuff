import { useGlobal } from "../globalContext";
import { AddToCartButton } from "./Buttons";
export const Products = () => {
  const { state } = useGlobal();
  return (
    <>
      <div className="product-section__subsection product-part">
        {state.products.map((item) => {
          return (
            <div class="card">
              <div class="card-image">
                <img className="product-img" src={item.image} />
                <button class="pointer-cursor">❤</button>
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
