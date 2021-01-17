import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Card from "../../components/card";

function Produtos() {
  const produtos = [1, 2, 3, 4, 5];
  const classes = useStyles();

  return (
    <section className={classes.container}>
      {produtos.map((produto) => (
        <Link to="/produto">
          <Card key={produto} />
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
