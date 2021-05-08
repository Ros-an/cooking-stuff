import React from "react";
import { brandData } from "../data";

import "./Brand.css";

function Brand() {
  return (
    <>
      <p className="section-heading brand-section-heading">Brand Available</p>
      <div className="brand">
        {brandData.map((brand) => {
          return <div className="brand__item">{brand}</div>;
        })}
      </div>
    </>
  );
}

export default Brand;
