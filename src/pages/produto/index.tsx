import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Button from "../../components/button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Congratulations() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <CardMedia
          component="img"
          alt="Produto"
          width="140"
          height="140"
          image="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg"
          title="Produto"
        />
        <Typography className={classes.pos} color="textSecondary">
          Detalhes
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Contatar Vendedor
        </Typography>
        <Typography variant="body2" component="p">
          R$ 22.50
        </Typography>
        <CardActions>
          <Link to="/cart">
            <Button title="Adicionar ao carrinho" />
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}
