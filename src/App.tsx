import React from "react";
import { Container } from "@material-ui/core";

import Router from "./router";
import Header from "./components/header";

function App() {
  return (
    <Container>
      <Header />
      <Router />
    </Container>
  );
}

export default App;
