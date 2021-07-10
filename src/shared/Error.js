import React from "react";

function Error({ message }) {
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

export default Error;
