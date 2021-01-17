import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 10,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Produto"
          height="140"
          image="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg"
          title="Produto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nome do produto
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$22.50
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver
        </Button>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
