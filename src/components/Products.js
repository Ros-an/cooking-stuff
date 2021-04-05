import { useGlobal } from "../globalContext";

export const Products = () => {
  const { product } = useGlobal();
  return (
    <div className="product-section__subsection product-part">
      {product.map((item) => {
        return (
          <div class="card">
            <div class="card-image">
              <img className="product-img" src={item.image} />
              <button class="pointer-cursor">❤</button>
            </div>
            <div class="card-content">
              <p>Rating</p>
              <h4>Product name</h4>
              <p>price</p>
              <p>little</p>
              <button class="btn-product cart-btn">
                <span>
                  <i class="fas fa-cart-plus"></i>
                </span>
                <span> ADD TO CART</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
