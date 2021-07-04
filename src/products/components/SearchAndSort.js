import React from "react";
import { useFilterContext } from "../../context/filterContext";

function SearchAndSort() {
  const { sort, updateSort } = useFilterContext();
  return (
    <div className="sort-and-search">
      <div className="search">
        <input type="search" name="search" />
        <button className="pointer-cursor">search</button>
      </div>
      <div className="sort">
        <span>Sort By Price:</span>
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
  );
}

export default SearchAndSort;
