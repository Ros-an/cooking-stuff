import React from "react";
import { brandData } from "../../data";
import { useFilterContext } from "../../context/filterContext";
function Filter() {
  const {
    filters: { brand, min_price, max_price, price },
    updateFilters,
    clearFilters,
    toggle,
    setToggle,
  } = useFilterContext();
  return (
    <aside className={`filter-part ${toggle ? "show" : "hide"}`}>
      <div className="filter-content">
        <div className="filter-content__title">
          <h3>Filters</h3>
          <button onClick={() => setToggle(!toggle)}>
            <strong>X</strong>
          </button>
        </div>
        <form className="brands" onSubmit={(e) => e.preventDefault()}>
          <h4>Brands</h4>
          <div className="brands__item">
            <input
              type="radio"
              name="brand"
              checked={brand === "all" && "all"}
              value="all"
              onChange={updateFilters}
            />
            <label htmlFor="all">All</label>
          </div>
          {brandData.map((item) => (
            <div className="brands__item" key={item}>
              <input
                type="radio"
                name="brand"
                value={item.toLowerCase()}
                onChange={updateFilters}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </form>
        <div className="price">
          <h4>Price</h4>
          <div className="price-range">
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
            <span className="selected-price">₹ {price}</span>
          </div>
        </div>
        <button className="clear-filters" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </aside>
  );
}

export default Filter;
