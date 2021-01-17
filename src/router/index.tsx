import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Produtos from "../pages/produtos";
import Produto from "../pages/produto";
import Header from "../components/header";
import Purchase from "../pages/purchase-message";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/purchase">
          <Purchase />
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
