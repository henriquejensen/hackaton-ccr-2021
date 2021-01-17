import React from "react";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

import Button from "../../components/button";

function Congratulations() {
  return (
    <section>
      <CardMedia
        component="img"
        alt="Produto"
        height="100"
        width="100"
        image="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg"
        title="Produto"
      />
      <Typography variant="h3" component="h2">
        Compra Efetuada!
      </Typography>
      <Typography variant="h5" component="h2">
        Obrigado por contribuir com essa comunidade, uma porcentagem dessa venda
        será doada!
      </Typography>
      <Link to="/">
        <Button title="Continuar comprando" />
      </Link>
    </section>
  );
}

export default Congratulations;
