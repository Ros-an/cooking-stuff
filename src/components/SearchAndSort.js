import React from "react";

function SearchAndSort() {
  return (
    <div className="sort-and-search">
      <div className="search">
        <input type="search" name="search" />
        <button className="pointer-cursor">search</button>
      </div>
      <div className="sort">
        <span>Sort By Price:</span>
        <select name="sort" className="pointer-cursor">
          <option value="low-to-high">Low to High</option>
          <option value="hight-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SearchAndSort;
