import { useFilterContext } from "../../context/filterContext";
import ProductItem from "./ProductItem";
import SearchAndSort from "./SearchAndSort";

export const Products = () => {
  const { filtered_products } = useFilterContext();
  return (
    <>
      <div className="product-block">
        <SearchAndSort />
        <div className="product-part">
          {filtered_products.map((item) => {
            return <ProductItem key={item._id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};
