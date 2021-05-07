import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/globalContext";
import { FilterProvider } from "./context/filterContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
