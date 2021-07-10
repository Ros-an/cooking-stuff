import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/globalContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import AuthProvider from "./context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <AuthProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </AuthProvider>
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
