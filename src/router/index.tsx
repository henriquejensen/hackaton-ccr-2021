import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Produtos from "../pages/produtos";
import Produto from "../pages/produto";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produto">Produto</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/produto">
            <Produto />
          </Route>
          <Route path="/">
            <Produtos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
