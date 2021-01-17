import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Button from "../../components/button";

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
    width: "70%",
    borderRadius: 30,
    margin: "0 auto",
  },
});

export default function Congratulations() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h5" className={classes.pos}>
          Informações do Produto
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography className={classes.pos}>Detalhes</Typography>
            <Typography className={classes.pos} color="textSecondary">
              detalhes do produto
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              className={classes.image}
              component="img"
              alt="Produto"
              image="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg"
              title="Produto"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.pos}>Contatar Vendedor</Typography>

            <CardActions>
              <Link to="/cart">
                <Button title="Adicionar ao carrinho" />
              </Link>
            </CardActions>
          </Grid>
        </Grid>
        <Typography variant="body2" component="p">
          R$ 22.50
        </Typography>
      </CardContent>
    </Card>
  );
}
