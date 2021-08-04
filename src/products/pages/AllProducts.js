import { Products } from "../components/Products";
import Filter from "../components/Filter";
import {useGlobal} from "../../context/globalContext";
import Loader from "../../shared/Loader";
import "./AllProducts.css";

export const AllProducts = () => {
  const {loading} = useGlobal();

  return (
    <>
      {loading ? <Loader /> : <div className="product-section">
      <Filter />
      <Products />
    </div>}
    </>
  );
};
