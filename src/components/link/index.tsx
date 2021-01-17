import React, { ReactChild } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

export default function Link({
  to,
  children,
}: {
  to: string;
  children: ReactChild;
}) {
  const classes = useStyles();

  return (
    <RouterLink className={classes.link} to={to}>
      {children}
    </RouterLink>
  );
}
