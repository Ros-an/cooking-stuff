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
export const MiniLoader = ({ spinner, size }) => {
  return (
    <div className={`${spinner ? "white-circle" : "lds-circle"}`}>
      <div style={size}></div>
    </div>
  );
};
export default Loader;
