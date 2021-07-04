import { useFilterContext } from "../../context/filterContext";
import { Products } from "../components/Products";
import Filter from "../components/filter";
import Loader from "../../shared/Loader";

import "./AllProducts.css";

export const AllProducts = () => {
  const { filtered_products } = useFilterContext();

  if (!filtered_products.length) {
    return <Loader />;
  }
  return (
    <div className="product-section">
      <Filter />
      <Products />
    </div>
  );
};
