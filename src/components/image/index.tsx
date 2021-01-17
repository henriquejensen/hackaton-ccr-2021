import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  image: {
    width: "70%",
    borderRadius: 30,
  },
});

export default function Image({ image }: { image: string }) {
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.image}
      component="img"
      alt="Produto"
      height="140"
      image={image}
      title="Produto"
    />
  );
}
