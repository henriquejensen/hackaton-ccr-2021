import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Produtos from "../pages/produtos";
import Produto from "../pages/produto";
import Header from "../components/header";
import Congratulations from "../pages/congratulations";
import Cart from "../pages/cart";
import Login from "../pages/login";
import { AppContext } from "../store";

export default function App() {
  const { state } = React.useContext(AppContext);
  const { user } = state;
  if (!user.email || !user.password) {
    return (
      <Router>
        <Route path="/">
          <Login />
        </Route>
      </Router>
    );
  }

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
        <Route path="/:id">
          <Produto />
        </Route>
        <Route path="/">
          <Produtos />
        </Route>
      </Switch>
    </Router>
  );
}
