import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Card from "../../components/card";
import { AppContext } from "../../store";
import { Types } from "../../store/reducers";
import { setTimeout } from "timers";

function Produtos() {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const { state, dispatch } = useContext(AppContext);
  const { products } = state;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch({
        type: Types.Read,
      });
    }, 500);
  }, [products, dispatch]);

  if (isLoading) {
    return (
      <Typography variant="h3" component="h3" style={{ textAlign: "center" }}>
        ...
      </Typography>
    );
  }

  return (
    <section className={classes.container}>
      {products.map((product) => (
        <Link to={`/${product.id}`}>
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
