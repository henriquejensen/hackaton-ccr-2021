import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { AppContext } from "../../store";
import Button from "../../components/button";
import Image from "../../components/image";
import Link from "../../components/link";

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
  const { state } = useContext(AppContext);
  const { shoppingCart: products } = state;

  return (
    <section>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <Image image={products[0]?.image || ""} />
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
        <Button title="Continuar comprando" onClick={console.log} />
      </Link>
    </section>
  );
}

export default Congratulations;
