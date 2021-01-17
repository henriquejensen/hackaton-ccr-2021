import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Card from "../../components/card";
import { AppContext } from "../../store";
import { Types } from "../../store/reducers";
import { setTimeout } from "timers";

function Produtos() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { products } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: Types.Read,
      });
    }, 2000);
  }, [products, dispatch]);

  return (
    <section className={classes.container}>
      {products.map((product) => (
        <Link to="/produto">
          <Card key={product.id} {...product} />
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
