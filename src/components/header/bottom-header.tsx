import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Settings from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        label="Inicio"
        icon={
          <Link to="/">
            <Home />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Carrinho"
        icon={
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Configuracoes"
        icon={
          <Link to="/settings">
            <Settings />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
