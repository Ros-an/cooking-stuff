import React from "react";
import "./Rating.css";

function Rating({ rating }) {
  const starColor = `${
    rating < 2 ? "red" : rating >= 2 && rating < 4 ? "oranged" : "blue"
  }`;
  return (
    <div className="rating">
      <p>
        <span className={`${starColor}`}>
          <i class="fas fa-star"></i>
        </span>{" "}
        {rating}
      </p>
    </div>
  );
}

export default Rating;
