import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Button from "../../components/button";

const useStyles = makeStyles({
  grid: {
    marginTop: 30,
    marginBottom: 60,
  },
  message: {
    marginTop: 30,
  },
});

function Congratulations() {
  const classes = useStyles();

  return (
    <section>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt="Produto"
            height="100"
            width="100"
            image="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg"
            title="Produto"
          />
        </Grid>
        <Grid item xs={8}>
          <div>
            <Typography variant="h5" component="h1">
              Compra Efetuada!
            </Typography>
            <div className={classes.message}>
              Obrigado por contribuir com essa comunidade, uma porcentagem dessa
              venda será doada!
            </div>
          </div>
        </Grid>
      </Grid>
      <Link to="/">
        <Button title="Continuar comprando" />
      </Link>
    </section>
  );
}

export default Congratulations;
