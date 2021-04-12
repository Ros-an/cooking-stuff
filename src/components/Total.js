import React from "react";

export const Total = () => {
  return (
    <div className="total-block">
      <div className="sub-total">
        <h3>{`Subtotal :          Rs. ${total}`}</h3>
        <p>{`No. of item :      ${amount}`}</p>
      </div>
      <h2>{`Order Total :      Rs. ${total}`}</h2>
    </div>
  );
};
