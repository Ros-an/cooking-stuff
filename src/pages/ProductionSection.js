import { useFilterContext } from "../context/filterContext";
import { Products } from "../components/Products";
import Filter from "../components/filter";
import Loading from "./Loader";

import "./productsection.css";

export const ProductSection = () => {
  const { filtered_products } = useFilterContext();

  if (!filtered_products.length) {
    return <Loading />;
  }
  return (
    <div className="product-section">
      <Filter />
      <Products />
    </div>
  );
};
