import React from "react";
import { Container } from "@material-ui/core";

import Router from "./router";

/**d7f1ed verde
f5a5a5 rosa
ffc8a1 laranja*/

function App() {
  return (
    <Container
      style={{
        backgroundColor: "#ffc8a1",
        borderRadius: 50,
        padding: 30,
        backgroundImage: "linear-gradient(#d7f1ed, #d7f1ed, #ffc8a1)",
        boxShadow:
          "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
      }}
    >
      <Router />
    </Container>
  );
}

export default App;
