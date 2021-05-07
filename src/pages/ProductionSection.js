import "./productsection.css";
import { Products } from "../components/Products";
import Filter from "../components/filter";
export const ProductSection = () => {
  return (
    <div className="product-section">
      <Filter />
      <Products />
    </div>
  );
};
