import React from "react";
import { Link } from "react-router-dom";

export function Error({ message }) {
  return (
    <div className="error-page">
      <p style={{ fontSize: "1.25rem", margin: "0" }}>
        Oops! Something went Wrong.Try again by refreshing!
      </p>{" "}
      <p>
        <strong>Error:</strong> {message}
      </p>
    </div>
  );
}

export const NotFound = () => {
  return (
    <div className="error-page">
      <h2 style={{ fontSize: "1.25rem", margin: "0.5rem" }}>404</h2>
      <p style={{ fontSize: "1.25rem", margin: "0.5rem" }}>PAGE NOT FOUND</p>
      <Link to="/">Home</Link>
    </div>
  );
};
