import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { AppContext } from "../../store";
import Button from "../../components/button";
import Image from "../../components/image";
import { Types } from "../../store/reducers";

const useStyles = makeStyles((theme) => ({
  wrapperBtn: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  btn: {
    color: "black",
    textDecoration: "none",
  },
  container: {
    paddingTop: 20,
  },
}));

function Cart() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(AppContext);
  const { shoppingCart: products } = state;
  const image = products[0]?.image;

  const deleteProduct = () => dispatch({ type: Types.Delete });

  return (
    <section>
      <Typography variant="h4" component="h1">
        Carrinho
      </Typography>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {image && <Image image={image} />}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h2">
              Nome
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h2">
              Frete
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h2">
              Quantidade
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h2">
              Subtotal
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.wrapperBtn}>
          {products.length ? (
            <span onClick={deleteProduct} className={classes.btn}>
              Remover
            </span>
          ) : (
            <Link to="/">
              <span className={classes.btn}>Voltar</span>
            </Link>
          )}

          <Link to="/congratulations">
            <Button title="Efetuar compra" onClick={console.log} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
