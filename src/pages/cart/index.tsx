import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <section>
      <Typography variant="h3" component="h2">
        Carrinho
      </Typography>
      <CardMedia
        component="img"
        alt="Produto"
        height="100"
        width="100"
        image="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg"
        title="Produto"
      />
      <Typography variant="h3" component="h2">
        Nome
      </Typography>
      <Typography variant="h5" component="h2">
        Quantidade
      </Typography>
      <Typography variant="h5" component="h2">
        Subtotal
      </Typography>
      <Link to="/congratulations">
        <Button size="small" color="primary">
          Efetuar compra
        </Button>
      </Link>
    </section>
  );
}

export default Cart;