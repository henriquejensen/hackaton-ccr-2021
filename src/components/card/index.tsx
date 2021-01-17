import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 10,
    padding: 10,
    borderRadius: 30,
    backgroundImage: "linear-gradient(#d7f1ed, #d7f1ed, #f5a5a5)",
    boxShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
    textAlign: "center",
  },
  image: {
    width: "70%",
    borderRadius: 30,
    margin: "0 auto",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
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
    </Card>
  );
}
