import "./css/productsection.css";
import { Products } from "./Products";
import Filter from "./filter";
export const ProductSection = () => {
  return (
    <div className="product-section">
      <Filter />
      <Products />
    </div>
  );
};
