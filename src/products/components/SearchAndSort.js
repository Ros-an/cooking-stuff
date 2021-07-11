import React from "react";
import { useFilterContext } from "../../context/filterContext";

function SearchAndSort() {
  const {
    sort,
    updateSort,
    filters: { text },
    updateFilters,
    setToggle,
  } = useFilterContext();
  return (
    <div className="sort-and-search">
      <div className="search">
        <input
          type="text"
          name="text"
          value={text}
          placeholder="search"
          onChange={updateFilters}
        />
      </div>
      <div className="sort">
        <h4
          className="sort-option pointer-cursor"
          onClick={() => setToggle((prev) => !prev)}
        >
          Filters
        </h4>
        <div className="sort-price">
          <h4>Sort By Price:</h4>
          <select
            name="sort"
            id="sort"
            className="pointer-cursor"
            value={sort}
            onChange={updateSort}
          >
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchAndSort;
