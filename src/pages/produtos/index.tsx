import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Card from "../../components/card";
import { AppContext } from "../../store";

function Produtos() {
  const classes = useStyles();
  const { state } = useContext(AppContext);

  return (
    <section className={classes.container}>
      {state.products.map((product) => (
        <Link to="/produto">
          <Card key={product.id} />
        </Link>
      ))}
    </section>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default Produtos;
