import React from "react";
import { brandData } from "../data";
import { v4 as uuidv4 } from "uuid";

import "./Brand.css";

function Brand() {
  return (
    <>
      <p className="section-heading brand-section-heading">Brand Available</p>
      <div className="brand">
        {brandData.map((brand) => {
          return (
            <div className="brand__item" key={uuidv4()}>
              {brand}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Brand;
