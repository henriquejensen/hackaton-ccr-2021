import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Redirect, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { AppContext } from "../../store";
import Button from "../../components/button";
import Image from "../../components/image";
import { Types } from "../../store/reducers";
import Link from "../../components/link";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 10,
    borderRadius: 30,
    backgroundImage: "linear-gradient(#d7f1ed, #d7f1ed, #f5a5a5)",
    boxShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function ProdutoDetail() {
  const classes = useStyles();
  let { id } = useParams<{ id: string }>();
  const { state, dispatch } = React.useContext(AppContext);
  const { products } = state;
  const product = products.find((product) => String(product.id) === id);

  if (!product) {
    return <Redirect to="/" />;
  }

  const addToCart = () => dispatch({ type: Types.Add, payload: product });

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h5" className={classes.pos}>
          Informações do Produto
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography className={classes.pos}>Detalhes</Typography>
            <Typography className={classes.pos} color="textSecondary">
              {product.details}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.image}>
            <Image image={product.image} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.pos}>
              <a href={`tel:${product.phone}`}>Contatar Vendedor</a>
            </Typography>

            <CardActions>
              <Link to="/cart">
                <Button title="Adicionar ao carrinho" onClick={addToCart} />
              </Link>
            </CardActions>
          </Grid>
        </Grid>
        <Typography variant="h4" component="h4">
          R$ {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
