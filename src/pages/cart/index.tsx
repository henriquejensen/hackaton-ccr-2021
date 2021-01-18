import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { AppContext } from "../../store";
import Button from "../../components/button";
import Image from "../../components/image";
import { Types } from "../../store/reducers";
import Link from "../../components/link";

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
  numberOfProducts: {
    display: "flex",
    alignItems: "center",
  },
  number: {
    backgroundColor: "white",
    padding: "5px 15px",
    borderRadius: 10,
  },
}));

function Cart() {
  const classes = useStyles();
  const [numberOfProducts, setNumberOfProducts] = React.useState(1);
  const { state, dispatch } = React.useContext(AppContext);
  const { shoppingCart: products } = state;
  const product = products[0];
  const image = product?.image;

  const deleteProduct = () => dispatch({ type: Types.Delete });
  const decreaseNumber = () =>
    numberOfProducts - 1 && setNumberOfProducts(numberOfProducts - 1);
  const increaseNumber = () => setNumberOfProducts(numberOfProducts + 1);

  return (
    <section>
      <Typography variant="h4" component="h1">
        Carrinho
      </Typography>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {image && <Image image={image} />}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" component="h2">
              Nome
            </Typography>
            <span>{product?.name}</span>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" component="h2">
              Frete
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" component="h2">
              Quantidade
            </Typography>
            <div className={classes.numberOfProducts}>
              <span onClick={decreaseNumber}>
                <ArrowBackIosIcon />
              </span>
              <span className={classes.number}>{numberOfProducts}</span>
              <span onClick={increaseNumber}>
                <ArrowForwardIosIcon />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" component="h2">
              Subtotal
            </Typography>
            <span>R$ {Number(product?.price || 0) * numberOfProducts}</span>
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
