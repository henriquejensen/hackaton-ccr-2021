import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Produtos from "../pages/produtos";
import Produto from "../pages/produto";
import Header from "../components/header";
import Congratulations from "../pages/congratulations";
import Cart from "../pages/cart";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/congratulations">
          <Congratulations />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/produto">
          <Produto />
        </Route>
        <Route path="/">
          <Produtos />
        </Route>
      </Switch>
    </Router>
  );
}
