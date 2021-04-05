import "./productsection.css";
import { Products } from "./Products";
export const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-section__subsection filter-part">
        <div className="filter-content">
          <p>Here will be the filter section</p>
        </div>
      </div>
      <Products />
    </div>
  );
};
