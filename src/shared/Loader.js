import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <main className="loader">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Loader;
