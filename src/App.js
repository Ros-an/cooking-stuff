import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Modal } from "./Modal";
import { useGlobal } from "./globalContext";

function App() {
  const { state } = useGlobal();
  return (
    <>
      {state.showModal && <Modal />}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
export default App;
