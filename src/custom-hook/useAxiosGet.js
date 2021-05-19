import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosGet(url) {
  const [getProduct, setProduct] = useState("");
  async function leleData() {
    try {
      const response = await axios.get(url);
      console.log(response.data.products);
      setProduct(response.data.products);
    } catch (err) {
      console.log(err);
    }
  }
  //   leleData();

  return { getProduct };
}

export default useAxiosGet;
