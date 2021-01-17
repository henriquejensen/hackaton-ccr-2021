import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMaterial from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Image from "../../components/image";
import { ProductType } from "../../store";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: 350,
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
  cardArea: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Card({ name, price, image = "" }: ProductType) {
  const classes = useStyles();

  return (
    <CardMaterial className={classes.root}>
      <div className={classes.cardArea}>
        <Image image={image} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          R${price}
        </Typography>
      </CardContent>
    </CardMaterial>
  );
}
